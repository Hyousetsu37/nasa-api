const {getAllPlanets} = require('../../models/planets.model')
async function httpGetAllPlanets (req,res) {
    //getAllPlanets will use the find operation from mongo to find the data necesary 
    return res.status(200).json(await getAllPlanets());
}

module.exports = {
    httpGetAllPlanets
};