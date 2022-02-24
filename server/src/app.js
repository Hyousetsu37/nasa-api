const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const app = express(); //request gets into our server and it's passed to express

const api = require('./routes/api')

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));
app.use(express.json()); //Checks our request for json content type - parser
app.use(express.static(path.join(__dirname,'..','public')))

app.use('/v1',api)//versioning with a router that wraps the other routes 

app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','index.html'))
})

module.exports = app