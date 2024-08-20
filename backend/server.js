require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const OpenAI = require("openai");
const fs = require("fs");
const axios = require("axios");
const RSSParser = require("rss-parser");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const path = require("path");
const PDFDocument = require("pdfkit");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const rssParser = new RSSParser();

const klayvio_list_id = "Rj85mx";

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

app.post("/analyze-data", async (req, res) => {
  const {
    fullName,
    email,
    companyName,
    industry,
    companySize,
    mainBusinessOperations,
    keyTools,
    mainChallenges,
    automationAreas,
    bottlenecks,
    businessGoals,
    aiGoals,
    avgRevenue,
    avgCost,
    manualHours,
    customerSatisfaction,
    leadTime,
    aiBudget,
    budgetConstraints,
  } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a business consultant specializing in AI and automation. Provide detailed recommendations based on the following business data.",
        },
        {
          role: "user",
          content: `
            Here is the data from a business:

            Full Name: ${fullName}
            Company Name: ${companyName}
            Industry: ${industry}
            Company Size: ${companySize}
            Main Business Operations: ${mainBusinessOperations}
            Key Tools/Software: ${keyTools}
            Main Challenges: ${mainChallenges}
            Areas for Automation: ${automationAreas}
            Workflow Bottlenecks: ${bottlenecks}
            Business Goals (6-12 months): ${businessGoals}
            AI/Automation Goals: ${aiGoals}
            Average Revenue Per Month: ${avgRevenue}
            Average Cost Per Month: ${avgCost}
            Manual Process Hours per Week: ${manualHours}
            Customer Satisfaction Rate: ${customerSatisfaction}
            Lead Time from Order to Delivery: ${leadTime}
            AI/Automation Budget: ${aiBudget}
            Budget Constraints: ${budgetConstraints}
          `,
        },
      ],
    });

    const recommendations = completion.choices[0].message.content;

    // Generate PDF report
    const filePath = path.join(
      __dirname,
      `${fullName.replace(/ /g, "_")}_AI_Automation_Audit_Report.pdf`
    );
    createPdfReport(
      fullName,
      companyName,
      industry,
      companySize,
      recommendations,
      filePath
    );

    // Send email with PDF report attached
    sendEmailWithAttachment(email, filePath, async (err, info) => {
      if (err) {
        console.error("Failed to send email:", err);
        res.status(500).send("Failed to send email");
      } else {
        console.log("Email sent:", info.response);

        // Delete the temporary file after sending the email
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Failed to delete temporary file:", err);
          } else {
            console.log("Temporary file deleted");
          }
        });

        // Send the data to Klaviyo (example of a POST request to add to a list)
        const klaviyoData = {
          profiles: [
            {
              email: email,
              properties: {
                $first_name: fullName,
                company_name: companyName,
                industry: industry,
                company_size: companySize,
                recommendations: recommendations,
              },
            },
          ],
        };

        try {
          await axios.post(
            `https://a.klaviyo.com/api/v2/list/${klayvio_list_id}/members`,
            klaviyoData,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.KLAVIYO_API_KEY}`,
              },
            }
          );

          // Send the welcome email with the ChatPDF link
          await sendEmailWithChatPDFLink(email);

          res
            .status(200)
            .send(
              "Klaviyo profile created, PDF sent, and ChatPDF link email sent successfully"
            );
        } catch (klaviyoError) {
          console.error("Error interacting with Klaviyo:", klaviyoError);
          res.status(500).send("Error interacting with Klaviyo");
        }
      }
    });
  } catch (error) {
    console.error(
      "Error interacting with OpenAI API or generating report:",
      error
    );
    res
      .status(500)
      .send("Error interacting with OpenAI API or generating report");
  }
});

function sendEmailWithChatPDFLink(to) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: "Welcome to The Mastery House!",
    text: "Thank you for signing up! As a special welcome, we're giving you access to our ChatPDF tool. Use this link to chat with your PDF: https://your-chatpdf-link.com",
  };

  return transporter.sendMail(mailOptions);
}

function createPdfReport(
  fullName,
  companyName,
  industry,
  companySize,
  recommendations,
  filePath
) {
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(20).text("AI/Automation Audit Report", { align: "center" });
  doc.moveDown();
  doc.fontSize(16).text(`Hello ${fullName},`, { align: "left" });
  doc.moveDown();
  doc
    .fontSize(12)
    .text(
      "Thank you for subscribing to our newsletter. Here is your AI/Automation Audit Report:",
      { align: "left" }
    );
  doc.moveDown();
  doc.fontSize(14).text("Company Information:", { align: "left" });
  doc.fontSize(12).text(`Company Name: ${companyName}`, { align: "left" });
  doc.text(`Industry: ${industry}`, { align: "left" });
  doc.text(`Company Size: ${companySize}`, { align: "left" });
  doc.moveDown();
  doc.fontSize(14).text("Recommendations:", { align: "left" });
  doc.fontSize(12).text(recommendations, { align: "left" });

  doc.end();
}

function sendEmailWithAttachment(to, filePath, callback) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: "Your AI/Automation Audit Report",
    text: "Please find attached your personalized AI/Automation Audit Report.",
    attachments: [
      {
        filename: path.basename(filePath),
        path: filePath,
      },
    ],
  };

  transporter.sendMail(mailOptions, callback);
}

// Add the email sending route
app.post("/send-email", async (req, res) => {
  const { to, subject, body } = req.body;

  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define the email options
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: body,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
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
