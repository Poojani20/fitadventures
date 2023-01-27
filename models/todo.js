const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const todoSchema = new Schema({
    task:{type:String},
    id:{type:Number}
   

}) 

module.exports = mongoose.model('Todo',todoSchema)