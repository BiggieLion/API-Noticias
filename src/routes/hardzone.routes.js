const hardzoneController = require('../controllers/hardzone.controller');
const express = require("express");
const router = express.Router();

router.get('/noticias/hardzone', hardzoneController.hardzoneService);

module.exports = router;