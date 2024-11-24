
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    
    title: String
    
   
});

const TodoModel = mongoose.model("todo", TodoSchema)

module.exports = TodoModel