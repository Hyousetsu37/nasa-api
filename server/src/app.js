const express = require('express');
const path = require('path');
const {planetsRouter} = require('./routes/planets/planets.router')
const {launchesRouter} = require('./routes/launches/launches.router')
const cors = require('cors');
const morgan = require('morgan');
const app = express(); //request gets into our server and it's passed to express
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));
app.use(express.json()); //Checks our request for json content type - parser
app.use(express.static(path.join(__dirname,'..','public')))
app.use('/planets',planetsRouter); //then goes to our express router which handles all of our planets routes
app.use('/launches',launchesRouter);
app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','index.html'))
})

module.exports = app