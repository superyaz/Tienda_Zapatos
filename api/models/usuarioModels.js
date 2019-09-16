const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: false,
        default: true
    },
    password: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Usuario', usuarioSchema);