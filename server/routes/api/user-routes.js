const router = require('express').Router();
const { createUser, login, getUsers, getUser, updateUser } = require("../../controllers/user-controllers")



// /api/users
router.route("/").post(createUser).get(getUsers);

// /api/users/:userId
router.route("/:userId").get(getUser).put(updateUser);

router.route("/login").post(login)

module.exports = router;