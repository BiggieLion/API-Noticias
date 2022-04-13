const {Router} = require("express");
const noticiasController = require('../controllers/noticias.controller');

const router = Router();

router.get('/noticias', noticiasController.noticiasService);

module.exports = router;