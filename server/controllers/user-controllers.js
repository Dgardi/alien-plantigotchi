const { User } = require("../models/index");

module.exports = {
    // Object desctructuring the req arugment for easier access to req.body
    async createUser ({ body }, res) {
        const user = await User.create(body);

        
    },

    async login ({ body }, res) {
        const user = await User.findOne({ email: body.email });

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
          return res.status(400).json({ message: 'Wrong password!' });
        }

        res.status(200).json(user);
    }
}