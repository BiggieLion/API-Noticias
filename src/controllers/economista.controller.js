const errorController = require('../functions/error.function');
const noticiasModel = require('../models/noticias.model');
const economistaController = {};

economistaController.economistaService = async (req, res) => {
    try {
        console.log("Route /noticia/economista requested");
        const response = await noticiasModel.aggregate([{$match: {fuente: "economista"}}]);
        res.status(200).json({
            status: 200,
            error: false,
            success: true,
            data: response
        });
    } catch (error) {
        errorController.onError("/noticias/economista", res, error)
    }
};

module.exports = economistaController;