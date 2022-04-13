const express = require('express');

//Initializations
const app = express();

//Configurations
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(require('./routes/index.routes')); //Home
app.use(require('./routes/noticias.router')); //Noticias Generales
app.use(require('./routes/abc.routes')); //Noticias ABC
app.use(require('./routes/cinco.routes')); //Noticias Cinco Pais
app.use(require('./routes/economista.routes')); //Noticias El Economista
app.use(require('./routes/pais.routes')); //Noticias El Pais
app.use(require('./routes/hardzone.routes')); //Noticias Hardzone
app.use(require('./routes/vandal.routes')); //Noticias Vandal

module.exports = app;