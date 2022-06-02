const router = require('express').Router();

const {
    getPlants,
    getPlant,
    createPlant,
    deletePlant,
    updatePlant,
} = require('../../controllers/plant-controllers')

// /api/plants

router.route('/').post(createPlant).get(getPlants);

router.route('/:plantId').delete(deletePlant).put(updatePlant).get(getPlant);


module.exports = router;