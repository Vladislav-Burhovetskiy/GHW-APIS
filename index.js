const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const PORT = 8000;
const challenges = [];

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/challenges", (req, res) => {
  axios
    .get("https://ghw.mlh.io/challenges")
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      $('a:contains("")', html).each(function () {
        const title = $(this).text();
        const url = $(this).attr("href");
        challenges.push({ title, url });
      });

      res.json(challenges);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
