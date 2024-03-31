const getLibraryService = require("../services/getLibraryService");

const getLibraryController = async (req,res)=> {
    try {
        const libraries = await getLibraryService();
        res.status(200).json(libraries);
        
    } catch (error) {
        res.status(500).json({error: error.massage});
        
    }
}

module.exports={
    getLibraryController:getLibraryController
};