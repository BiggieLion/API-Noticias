const paisController = require('../controllers/pais.controller');
const express = require("express");
const router = express.Router();

router.get('/noticias/elpais', paisController.paisService);

module.exports = router;