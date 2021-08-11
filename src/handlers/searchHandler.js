// Core Modules
const url = require("url");
const fetch = require("node-fetch");

// Code
const searchHandler = (req, res) => {
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;
        fetch(`https://api.edamam.com/api/nutrition-data?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&nutrition-type=${query["nutrition-type"]}&ingr=${query["ingr"]}`)
          .then((res) => res.json())
          .then((text) => res.json(text));
};

module.exports = searchHandler;
