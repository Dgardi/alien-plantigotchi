const { Schema, Types } = require("mongoose")

const userSchema = new Schema (
    id: 
    name: // custom name
    owner: // user id
    plantType: // alien or human 
    // write if statements on front end to determine stage
    lifepoints: // current plants lifepoints starts at 0
    cooldownTimer: // use moment and a future timestamp
    // every time user opens page, moment 
)