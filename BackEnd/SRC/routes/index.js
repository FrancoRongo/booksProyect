const Router = require ("express");
const booksroutes = require ("./booksRoutes.js");
const libraryroutes = require ("./libraryRoutes.js");
const router = Router();

router.use("/books", booksroutes);
router.use("/library",libraryroutes);

module.exports= router;