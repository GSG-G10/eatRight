// core modules
const express = require('express');
const homeHandler = require('./handlers/homeHandler');

const router = express.Router();

router.get('/json',homeHandler);

module.exports = router;
