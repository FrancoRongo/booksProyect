const {Schema, model} = require("mongoose");

const bookSchema = new Schema ({
    title:{type:String, require:true},
    year: {type:Number, require:true},
    author:{type:String, require:true},
    genre:{type:Array, require: true},
    editorial:{type:String, require:true},
    poster: {type:String, require:true},
});

const Book = model("Book",bookSchema);

module.exports=Book;