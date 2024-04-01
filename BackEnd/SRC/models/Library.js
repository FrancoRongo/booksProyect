const { Schema, model } = require("mongoose");

const librarySchema = new Schema ({
    nombre: {type: String, required:true},
    direccion: {type: String, required:true},
    telefono: {type: Number, required:true},
    horario: {type: Number, required:true},
    servicios: {type: Array, required:true},
})

const Library = model("Library", librarySchema);

module.exports=Library;
