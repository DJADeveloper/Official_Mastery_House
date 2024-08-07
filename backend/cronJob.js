const cron = require("node-cron");
const scrapeMasteryHouse = require("./scrapeMasteryHouse");

cron.schedule("0 0 * * *", () => {
  scrapeMasteryHouse();
  console.log("Knowledge base updated");
});
