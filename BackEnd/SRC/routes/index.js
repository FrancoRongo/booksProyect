const Router = require ("express");
const booksroutes = ("./booksRoutes.js");
const libraryroutes = ("./libraryRoutes.js");
const router = Router();

router.use ("/books", booksroutes);
router.use ("/libray",libraryroutes);

module.exports=router;