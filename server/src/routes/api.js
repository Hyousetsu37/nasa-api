const express = require('express');
const {planetsRouter} = require('./planets/planets.router')
const {launchesRouter} = require('./launches/launches.router')

const api = express.Router();

api.use('/planets',planetsRouter); //then goes to our express router which handles all of our planets routes
api.use('/launches',launchesRouter);

module.exports = api