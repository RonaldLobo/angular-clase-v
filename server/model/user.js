var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nombre: { type: String, require: true },
    apellido1: { type: String, require: true },
    correo: { type: String, require: true },
    usuario: { type: String, require: true, unique: true }
},{ 
	versionKey: false 
});

module.exports = mongoose.model('user', schema);
