const { Schema, Types } = require("mongoose")

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true
        }
    }
)