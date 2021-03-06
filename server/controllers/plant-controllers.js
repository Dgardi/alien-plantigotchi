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
    Plant.findOne({_id: req.params.plantId})
    .select('-__v')
    .then((plant) =>
    ! plant
    ? res.status(404).json({ message: 'No plant with that ID!'})
    : res.json(plant)
    )
    .catch((err) => res.status(500).json(err))
},


// Get User's Plants

async getUserPlants (req, res) {
    try {
        // Find all users and populate their respective thoughts
        const userPlants = await Plant.find({
            owner: req.params.userId,
            finished: false
        });

        res.status(200).json(userPlants);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
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
        {_id: req.params.plantId},
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

// deletePlant(req,res) {
//     Plant.findOneAndDelete({ _id: req.params.plantId})
//     .then((plant) =>
//     ! plant
//     ? res.status(404).json({ message: 'No plant with that ID!'})
//     : User.deleteMany({ _id: {$in: plant.username}}))
// }

deletePlant(req,res) {
    Plant.findOneAndDelete({ _id: req.params.plantId})
    .then((plant) =>{
        if (!plant) {
            return res.status(404).json({ message: 'No Plant with that id!'});
        } 
        res.json(plant);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);

    });


},
};

