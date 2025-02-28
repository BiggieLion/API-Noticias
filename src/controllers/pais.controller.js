const errorController = require('../functions/error.function');
const noticiasModel = require('../models/noticias.model');
const paisController = {};

paisController.paisService = async (req, res) => {
    try {
        console.log("Route /noticias/elpais requested");
        const response = await noticiasModel.aggregate([{$match: {fuente: "pais"}}]);
        res.status(200).json({
            status: 200,
            error: false,
            success: true,
            data: response
        });
    } catch (error) {
        errorController.onError("/noticias/elpais", res, error);
    }
};

module.exports = paisController;