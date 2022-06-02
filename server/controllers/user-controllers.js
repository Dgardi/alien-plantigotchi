const { User } = require("../models/index");

module.exports = {
    // Object desctructuring the req arugment for easier access to req.body
    async createUser ({ body }, res) {
        try {
            const user = await User.create(body);

            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async login ({ body }, res) {
        try{
            console.log(body)
            const user = await User.findOne({ username: body.username });

            console.log(user);
            const correctPw = await user.isCorrectPassword(body.password);

            if (!correctPw) {
                return res.status(400).json({ message: 'Wrong password!' });
            }

            res.status(200).json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}