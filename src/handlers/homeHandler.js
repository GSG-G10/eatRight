// Core Modules
const path = require('path');

// Code
const homeHandler = (req, res) => {
    const filePath = path.join(__dirname, '..', 'food.json');
    res.sendFile(filePath);
};

module.exports = homeHandler;