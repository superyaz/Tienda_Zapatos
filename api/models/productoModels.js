const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    talla: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    cantidad: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    imagen: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Producto', productoSchema);