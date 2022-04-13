const vandalController = require('../controllers/vandal.controller');
const express = require("express");
const router = express.Router();

router.get('/noticias/vandal', vandalController.vandalService)

module.exports = router;
