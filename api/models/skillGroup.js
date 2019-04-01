const mongoose = require('mongoose');

const skillGroupSchema = mongoose.Schema({
    title: String,
    highlighted: Boolean,
    skills: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        }
    ]
});

module.exports = mongoose.model('SkillGroup',skillGroupSchema);