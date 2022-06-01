const { Schema, model } = require("mongoose")

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

userSchema.virtual("numberOfPlants").get(function() {
    return this.plants.length;
});

const User = model("User", userSchema);

module.exports = User;