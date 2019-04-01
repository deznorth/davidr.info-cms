const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    name: String,
    proficiency: Number
});

module.exports = mongoose.model('Skill',skillSchema);