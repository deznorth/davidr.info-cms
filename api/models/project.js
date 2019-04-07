const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    isHighlighted: { type:Boolean, default:false},
    imgUrl: { type:String, default:'https://i.imgur.com/qrjaeB5.png'},
    title: { type:String, required:true },
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