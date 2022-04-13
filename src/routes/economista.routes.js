const economistaController = require('../controllers/economista.controller');
const express = require("express");
const router = express.Router();

router.get('/noticias/economista', economistaController.economistaService);

module.exports = router;