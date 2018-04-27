var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nombre: { type: String, require: true },
    descripcion: { type: String, require: true },
    precio: { type: Number, require: true }
}, {
    versionKey: false
});

module.exports = mongoose.model('product', schema);
