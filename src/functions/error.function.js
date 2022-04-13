const errorController = {};

errorController.onError = (route, res, e) => {
    console.log(`Error on route ${route}`);
    console.error(e);
    res.status(500).json({
        status: 500,
        error: true,
        success: false,
        data: {}
    });
};

module.exports = errorController;