const Book = require ("../models/Book");

const createBookService = async (bookData) => {
    try {
        console.log(bookData);
        console.log ("Intenado ingresar a la base de datos para crear un libro...")
        const newBook = new Book (bookData);
        const createdBook = await newBook.save();
        console.log("Libro creado:",createdBook);
        return createdBook;

    } catch (error) {
        console.error ("Error al crear el libro". error.message);
        throw error;
    }
}
module.exports = createBookService;