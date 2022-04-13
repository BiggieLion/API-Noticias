const {Schema, model} = require('mongoose');

const noticiaSchema = new Schema({
    titulo: {type: String, requested: true},
    imagen: {type: String, requested: true},
    autor: {type: String, requested: true},
    fecha: {type: String, requested: true},
    direccionNoticia: {type: String, requested: true},
    fuente: {type: String, required: true}
});

module.exports = model("noticia", noticiaSchema);