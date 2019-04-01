const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    isHighlighted: Boolean,
    imgUrl: String,
    title: String,
    description: String,
    repoUrl: String,
    liveUrl: String,
    blogPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogPost'
    },
    tags: [String],
    startDate: String,
    endDate: String
});

module.exports = mongoose.model('Project',projectSchema);