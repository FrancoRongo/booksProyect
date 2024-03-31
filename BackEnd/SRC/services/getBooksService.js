const Book = require ("../models/Book.js");

const getBooksServices = async()=>{

    try {
        console.log("Intentando conectar con la base de datos")
        const books = await Book.find();
        console.log("Libros encontrados", books);
        return books;
        
    } catch (error) {
        console.log("Error al obetener los libros", error.message);
        throw error;
        
    }
}

module.exports=getBooksServices;