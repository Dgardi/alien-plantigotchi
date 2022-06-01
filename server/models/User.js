const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt");

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address']
        },
        password: {
            type: String,
            require: true,
        },
        plants: [
            {
                type: Schema.Types.ObjectId,
                ref: "Plant"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

userSchema.pre('save', async function (next) {
    console.log("password encryption?");
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual("numberOfPlants").get(function() {
    return this.plants.length;
});

const User = model("User", userSchema);

module.exports = User;