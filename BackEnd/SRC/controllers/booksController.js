const getBookServices = require ("../services/getBooksService.js");
const createBookServices = require("../services/creatBookService");

const getBookController = async (req, res) =>{
    try {
        const books = await getBookServices();
        res.status(200).json(books);
        
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
}

const creatBookController = async (req,res)=>{
    try {
        const bookData = req.body;
        const newBook = await createBookServices(bookData);
        res.status(200).json(newBook)
        
    } catch (error) {
        res.status(500).json ({error: error.message});
    }
}

module.exports = {
    getBookController:getBookController,
    creatBookController:creatBookController
}