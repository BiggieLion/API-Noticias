const errorController = require('../functions/error.function');
const noticiasModel = require('../models/noticias.model');
const hardzoneController = {};

hardzoneController.hardzoneService = async (req, res) => {
    try {
        console.log("Route /noticias/hardzone requested");
        const response = await noticiasModel.aggregate([{$match: {fuente: "hardzone"}}]);
        res.status(200).json({
            status: 200,
            error: false,
            success: true,
            data: response
        });
    } catch (error) {
        errorController.onError("/noticias/hardzone", res, error)
    }
}

module.exports = hardzoneController;