const errorController = require('../functions/error.function');
const noticiasModel = require('../models/noticias.model');
const cincoController = {};

cincoController.cincoService = async (req, res) => {
    try {
        console.log("Route /noticias/cincodias requested");
        const response = await noticiasModel.aggregate([{$match: {fuente: "cinco"}}]);
        res.status(200).json({
            status: 200,
            error: false,
            success: true,
            data: response
        });
    } catch (error) {
        errorController.onError("/noticias/cincodias", res, error)
    }
};

module.exports = cincoController;