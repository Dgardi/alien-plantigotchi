const { User } = require("../models/index");

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

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
            const user = await User.findOne({ username: body.username });

            const correctPw = await user.isCorrectPassword(body.password);

            if (!correctPw) {
                return res.status(400).json({ message: 'Wrong password!' });
            }

           res.json({token: jwt.sign({email:user.email, username:user.username, _id:user._id}, secret, {expiresIn: expiration})})
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // Get All Users

    getUsers(req,res) {
        User.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // Get Single User
    getUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .populate('currentPlants')
          .then((user) => {
            if (!user) {
              return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(user);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },

      // Update a User
      updateUser(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          {
            $set: req.body,
          },
          {
            runValidators: true,
            new: true,
          }
        )
          .then((user) => {
            if (!user) {
              return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(user);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
}