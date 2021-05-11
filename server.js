const express=require('express')
const app=express()
const path=require('path')
const bodyParser=require("body-parser")
const PORT=process.env.PORT || 3000
const mongoose=require('mongoose')
require("./models/item")
const ejs=require('ejs')
const item = require('./models/item')
app.set('views', path.join(__dirname, '/resource/views'))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
const i1=[];
mongoose.connect("mongodb://localhost:27017/Todo", { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
const connection = mongoose.connection
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});

app.get("/",(req,res)=>{
    item.find({},(err,task)=>{
        res.render("index", {newListItems:task}) 
    })
    
})

app.post('/',(req,res)=>{
    var i=req.body.n;
    const message=new item({
        task:i
    })
    message.save()
    res.redirect("/") 
})

app.listen(PORT,()=>
{
    console.log(`server is running this port ${PORT}`)
})