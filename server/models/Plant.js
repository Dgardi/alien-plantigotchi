const { Schema, Types } = require("mongoose")

const plantSchema = new Schema (
    {
        name: {
            type: String,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        humanPlant: {
            type: Boolean,
            required: true
        },
        lifePoints: {
            type: Number,
            default: 0,
        }, // current plants lifepoints starts at 0
        cooldownTimer: // use moment and a future timestamp
        // every time user opens page, moment 
    }
)

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;