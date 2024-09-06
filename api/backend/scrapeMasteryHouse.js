// const puppeteer = require("puppeteer");
// const fs = require("fs");

// async function scrapeMasteryHouse() {
//   console.log("Starting the scraping process...");

//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();

//   try {
//     await page.goto("https://www.themasteryhouse.com", {
//       waitUntil: "networkidle2",
//     });
//     console.log("Page loaded...");

//     // Extract relevant information
//     const data = await page.evaluate(() => {
//       // Extract services
//       const services = Array.from(
//         document.querySelectorAll(".service-grid-box h5")
//       ).map((item) => item.innerText);

//       // Extract about section
//       const aboutElement = document.querySelector(".about-content");
//       const about = aboutElement
//         ? aboutElement.innerText
//         : "About section not found";

//       return { services, about };
//     });

//     console.log("Data extracted:", data);

//     fs.writeFileSync("knowledgeBase.json", JSON.stringify(data, null, 2));
//     console.log("Data saved to knowledgeBase.json");
//   } catch (error) {
//     console.error("Error during scraping:", error);
//   } finally {
//     await browser.close();
//     console.log("Browser closed...");
//   }
// }

// scrapeMasteryHouse();
