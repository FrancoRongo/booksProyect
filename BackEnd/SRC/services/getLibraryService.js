const Library = require("../models/Library");

const getLibraryService = async () =>{
    try {
        console.log ("Intentando conectar a la base de datos")
        const libraries = await Library.find();
        console.log ("Bibliotecas encontradas: ", libraries);
        return libraries;
    } catch (error) {
        console.log ("Error al encontrar las Bibliotecas", error.message)
        throw error;    
    }

}

module.exports=getLibraryService;