const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const itemschema=new Schema({
    task:{
        type:String
    },
})
module.exports = mongoose.model('item', itemschema)