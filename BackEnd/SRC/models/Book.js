const {Schema, model} = require ("mongoose");

const bookSchema = new Schema ({
    title:{type:String, required:true},
    year: {type:Number, required:true},
    author:{type:String, required:true},
    genre:{type:Array, required: true},
    editorial:{type:String, required:true},
    poster: {type:String, required:true},
});

const Book = model("Book",bookSchema);

module.exports=Book;