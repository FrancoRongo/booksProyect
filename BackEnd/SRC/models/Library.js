const {Schema, model}= require ("express");

const librarySchema = new Schema ({
    nombre: {type: String, require:true},
    direccion: {type: String, require:true},
    telefono: {type: Number, require:true},
    horario: {type: Number, require:true},
    servicios: {type: Array, require:true},
})

const Library = model("Library", librarySchema);

module.exports=Library;
