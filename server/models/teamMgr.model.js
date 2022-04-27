const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Every player must have a Name"],
        minLength: [3, "Name must be at least 3 characters long"]
    },
    position: { 
        type: String,
        required: [true, "Players must have a preferred position"],
        minLength: [3, "Position must be at least 3 characters long"]
    },    
    gameOneStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },
    gameTwoStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },
    gameThreeStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },
}, { timestamps: true });

module.exports = mongoose.model("Player", PlayerSchema);