const cincoController = require('../controllers/cinco.controller');
const express = require("express");
const router = express.Router();

router.get('/noticias/cincodias', cincoController.cincoService);

module.exports = router;

