const Router = require ("express");
const booksRoutes = Router();
const booksController = require("../controllers/booksController");

booksRoutes.get("/", booksController.getBookController);
booksRoutes.post("/",booksController.creatBookController);

module.exports = booksRoutes;