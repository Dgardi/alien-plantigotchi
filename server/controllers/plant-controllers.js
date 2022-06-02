const { Plant, User } = require("../models/index");

module.exports = {
    // async 

// Get All Plants
getPlants(req, res) {
    Plant.find()
    .then((plant) => res.json(plant)).catch((err) => res.status(500).json(err));
},

// Get A Single Plant

getPlant(req, res) {
    Plant.findOne({_id: req.params.id})
    .select('-__v')
    .then((plant) =>
    ! plant
    ? res.status(404).json({ message: 'No plant with that ID!'})
    : res.json(plant)
    )
    .catch((err) => res.status(500).json(err))
},

// Create a Plant

createPlant(req, res) {
    Plant.create(req.body)
    .then((plant) => res.json(plant))
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
},

// Update a Plant
updatePlant(req, res) {
    Plant.findOneAndUpdate(
        {_id: req.params.id},
        {$set: req.body},
        {runValidators:true, new:true}
    )
    .then((plant) =>
    ! plant
    ? res.status(404).json({ message: 'No plant with that ID!'})
    : res.json(plant)
    )
    .catch((err) => res.status(500).json(err));
},

// Delete a Plant

deletePlant(req,res) {
    Plant.findOneAndDelete({ _id: req.params.id})
    .then((thought) =>
    ! plant
    ? res.status(404).json({ message: 'No plant with that ID!'})
    //! Okay. Not totally sure this is right.
    : User.deleteMany({ _id: {$in: plant.username}}))
}
};