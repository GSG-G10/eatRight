//core modules
require("env2")(".env");
const express = require("express");
const path = require("path");
const router = require("./router.js");
const port = process.env.PORT || 2000;
const searchHandler = require("./handlers/searchHandler");


const app = express();

//code
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/search", (req,res) => {searchHandler(req,res)});
app.use(router);

//404 middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "public", "404.html"));
});

//500middleware
// eslint-disable-next-line no-unused-vars
// app.use((err, req, res, next) => {
//   res.status(500).sendFile(path.join(__dirname, "..", "public", "500.html"));
// });

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
