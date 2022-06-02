const router = require('express').Router();
const { createUser, login } = require("../../controllers/user-controllers")

router.route("/").post(createUser)

router.route("/login").post(login)

module.exports = router;