const Router = require ("express");
const libraryRoutes = Router();
const libraryController = require("../controllers/libraryController");

libraryRoutes.get("/", libraryController.getLibraryController);

module.exports=libraryRoutes;