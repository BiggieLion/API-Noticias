const noticiasModel = require('../models/noticias.model');
const errorController = require('../functions/error.function');
const vandalController = {};

vandalController.vandalService = async (req, res) => {
    try {
        console.log("Route /noticias/vandal requested");
        const response = await noticiasModel.aggregate([{$match: {fuente: "vandal"}}]);
        res.status(200).json({
            status: 200,
            error: false,
            success: true,
            data: response
        });
    } catch (error) {
        errorController.onError("/noticias/vandal", res, error)
    }
}

module.exports = vandalController;