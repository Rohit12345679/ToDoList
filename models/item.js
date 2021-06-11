const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const itemschema=new Schema({
    task:{
        type:String
    }
},{timestamps:true })
module.exports = mongoose.model('Item', itemschema)