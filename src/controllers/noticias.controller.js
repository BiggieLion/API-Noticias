const noticiasController = {};
const mongoose = require('mongoose');
const errorController = require('../functions/error.function');
const noticiaModelo = require('../models/noticias.model');

noticiasController.noticiasService = async (req, res) => {
    try {
        const response = await noticiaModelo.find();
        res.status(200).json({
            status: 200,
            error: false,
            success: true,
            data: response
        });
    } catch (error) {
        errorController.onError("/noticias", res, error);
    }
};

module.exports = noticiasController;