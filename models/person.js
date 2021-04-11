const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Person', PersonSchema);