//core modules
require("env2")(".env");
const express = require("express");
const path = require("path");
const router = require("./router.js");
const port = process.env.PORT || 2000;
const fetch = require("node-fetch");

const url = require("url");

const app = express();

//code
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/search", (req, res) => {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  fetch(`https://api.edamam.com/api/nutrition-data?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&nutrition-type=${query["nutrition-type"]}&ingr=${query["ingr"]}`)
    .then((res) => res.json())
    .then((text) => res.send(text));
});
app.use(router);

//404 middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "public", "404.html"));
});

//500middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, "..", "public", "500.html"));
});

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
