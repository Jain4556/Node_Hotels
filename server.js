const express = require('express');
const app = express()
const db = require('./db')
require('dotenv').config();


const  MenuItem   = require('./person');

app.get('/', function (req, res) {
  res.send('Hello World, This is sunil')
})

app.get('/', function (req, res){
  res.send("Welcome to My new Hotel....")
})



// post
app.post ('/hotel', async (req, res)=>{
  try{
    const  data  = req.body

    const newMenu = MenuItem(data);
   

    const response  =await newMenu.save();
    console.log('data saved');
    res.status(200).json(response)
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }

})

app.get('/hotel', async (req, res)=>{
  try{
    const data  = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data)
  }
  catch(err){
    console.log(err) 
    res.status(500).json({error: 'Internal server error'})
  }
})

const PORT = process.env.PORT || 3000;

 app.listen(3000, ()=>{
  console.log("Lisetning on port 3000")
 })

 