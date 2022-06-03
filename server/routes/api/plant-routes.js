const router = require('express').Router();

const {
    getPlants,
    getPlant,
    getUserPlants,
    createPlant,
    deletePlant,
    updatePlant,
} = require('../../controllers/plant-controllers')

// /api/plants

router.route('/').post(createPlant).get(getPlants);

router.route("/:userId").get(getUserPlants);

router.route('/:plantId').delete(deletePlant).put(updatePlant).get(getPlant);


module.exports = router;