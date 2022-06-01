const { Schema, model } = require("mongoose")

const plantSchema = new Schema (
    {
        name: {
            type: String,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        earthPlant: {
            type: Boolean,
            required: true
        },
        lifePoints: {
            type: Number,
            default: 0,
        },
        cooldownTimer: {
            type: Date,
        }
    }
)

const Plant = model("Plant", plantSchema);

module.exports = Plant;