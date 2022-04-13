const abcController = require('../controllers/abc.controller');
const express = require("express");
const router = express.Router();

router.get('/noticias/abc', abcController.abcService);

module.exports = router;