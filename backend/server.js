require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const OpenAI = require("openai");
const fs = require("fs");
const axios = require("axios");
const RSSParser = require("rss-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const rssParser = new RSSParser();

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const knowledgeBase = JSON.parse(
  fs.readFileSync("knowledgeBase.json", "utf-8")
);

// In-memory storage for blog posts (for simplicity)
let blogPosts = [];

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  const response = searchKnowledgeBase(message);

  if (response) {
    res.json({ reply: response });
  } else {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: message },
        ],
      });

      const reply = completion.choices[0].message.content;
      res.json({ reply });
    } catch (error) {
      console.error("Error interacting with OpenAI API:", error);
      res.status(500).send("Error interacting with OpenAI API");
    }
  }
});

const searchKnowledgeBase = (message) => {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("about")) {
    return knowledgeBase.about;
  }

  for (const service of knowledgeBase.services) {
    if (lowerMessage.includes(service.name.toLowerCase())) {
      return `${service.description} Features: ${service.features.join(", ")}`;
    }
  }

  if (lowerMessage.includes("mission")) {
    return knowledgeBase.mission;
  }

  return null;
};

const fetchLatestNews = async () => {
  const feeds = [
    "https://techcrunch.com/feed/",
    "https://www.wired.com/category/tech/feed/",
    "https://www.theverge.com/rss/index.xml",
    "https://feeds.arstechnica.com/arstechnica/index",
    "https://www.engadget.com/rss.xml",
    "https://mashable.com/feeds/rss/tech",
  ];

  let articles = [];
  for (const feed of feeds) {
    try {
      const parsedFeed = await rssParser.parseURL(feed);
      if (parsedFeed.items.length > 0) {
        articles.push(parsedFeed.items[0]); // Limit to 1 article per feed
      }
    } catch (error) {
      console.error(`Error fetching articles from ${feed}:`, error);
    }
  }

  return articles;
};

const summarizeArticle = async (articleText) => {
  try {
    // Adjust the prompt to generate a summary around 200-250 words
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an expert content writer. Summarize the following article in a detailed, comprehensive manner, ensuring the summary is around 400-450 words and SEO-optimized with relevant keywords.`,
        },
        { role: "user", content: articleText },
      ],
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error summarizing article:", error);
    throw error;
  }
};

const extractImage = (article) => {
  if (article.enclosure && article.enclosure.url) {
    return article.enclosure.url;
  }
  if (article["content:encoded"]) {
    const imgTagMatch = article["content:encoded"].match(
      /<img[^>]+src="([^">]+)"/
    );
    if (imgTagMatch) {
      return imgTagMatch[1];
    }
  }
  return null;
};

const generateBlogPost = (id, title, summary, imageUrl) => {
  return {
    id: id,
    title: title,
    content: `
       <div>
        ${summary
          .split("\n")
          .map((paragraph) => `<p>${paragraph.trim()}</p>`)
          .join("")}
      </div>
      <p><em>Published on ${
        new Date().toISOString().split("T")[0]
      } by The Mastery House</em></p>
    `,
    imageUrl: imageUrl,
  };
};

const generateSocialMediaPost = (title, summary) => {
  return `${title}: ${summary.slice(0, 200)}... #TechNews #TheMasteryHouse`;
};

const sendToZapier = async (payload) => {
  try {
    const response = await axios.post(ZAPIER_WEBHOOK_URL, payload);
    console.log("Webhook sent:", response.data);
  } catch (error) {
    console.error("Error sending webhook:", error);
  }
};

app.post("/generate-content", async (req, res) => {
  const { recipientEmail } = req.body;

  try {
    console.log("Fetching latest news articles...");
    const articles = await fetchLatestNews();
    console.log(`Fetched ${articles.length} articles.`);

    for (const article of articles) {
      const {
        title,
        contentSnippet,
        content,
        "content:encoded": encodedContent,
      } = article;
      const articleContent = contentSnippet || content || encodedContent || "";
      try {
        console.log(`Summarizing article: ${title}`);
        const summary = await summarizeArticle(articleContent);
        console.log(`Summary generated: ${summary}`);

        const imageUrl = extractImage(article);
        const id = uuidv4();

        const blogPost = generateBlogPost(id, title, summary, imageUrl);
        const socialPost = generateSocialMediaPost(title, summary);

        // Save the blog post to your in-memory storage
        blogPosts.push(blogPost);
        console.log(`Blog post saved: ${title}`);

        // Prepare payload for Zapier
        const zapierPayload = {
          blogPost: blogPost,
          socialPost: socialPost,
          recipientEmail: recipientEmail,
        };

        await sendToZapier(zapierPayload);
      } catch (error) {
        console.error(`Error processing article "${title}":`, error);
      }
    }
    res.status(200).send("Content generated and sent to Zapier successfully!");
  } catch (error) {
    console.error("Error in /generate-content endpoint:", error);
    res.status(500).send("An error occurred while generating content.");
  }
});

// Endpoint to get all blog posts
app.get("/api/blog-posts", (req, res) => {
  res.json(blogPosts);
});

// Endpoint to get a specific blog post by ID
app.get("/api/blog-posts/:id", (req, res) => {
  const { id } = req.params;
  const post = blogPosts.find((post) => post.id === id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Blog post not found");
  }
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
