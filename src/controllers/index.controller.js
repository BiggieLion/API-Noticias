const indexController = {};
const errorController = require('../functions/error.function')

indexController.homeService = (req, res) => {
    try {
        console.log("Route / requested");
        res.status(200).json({
            status: 200,
            error: false,
            success: true,
            data: {
                Mensaje: "Aplicacion para imprimir solamente las noticias obtenidas por el web scraping, las rutas son",
                General: "/noticias",
                ABC: "/noticias/abc",
                CincoDias: "/noticias/cincodias",
                Economista: "/noticias/economista",
                Pais: "/noticias/elpais",
                Hardzone: "/noticias/hardzone",
                Vandal: "/noticias/vandal"
            }
        });
    } catch (error) {
        errorController.onError("/", res, error);
    }
};

module.exports = indexController;