const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const uuid = require('uuid');
const parser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
 
app.use(express.json());

 // middle
app.use(morgan("dev"));

//router
const infoRouter = require('./router');
app.use('/info',infoRouter);
 	
 
app.listen(5000,()=>
{
    console.log('server started on 5000');
});

 mongoose.connect(process.env.MYDB_CONNECTION,{
 useNewUrlParser:true,
 useUnifiedTopology:true},
 (err) =>{
    if(err){
        console.log('db not connected')
           }
console.log('db connected sucessfully');
})

