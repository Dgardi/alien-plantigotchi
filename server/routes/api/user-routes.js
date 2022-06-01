const router = require('express').Router();
const { createUser } = require("../../controllers/user-controllers")

router.route("/").post(createUser)

module.exports = router;