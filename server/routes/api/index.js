const router = require('express').Router();
const userRoutes = require('./user-routes');
const plantRoutes = require('./plant-routes');

router.use('/users', userRoutes);
router.use('/plants', plantRoutes);

module.exports = router;
