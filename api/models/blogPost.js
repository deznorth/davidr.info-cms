const mongoose = require('mongoose');

//In the future, make author into a user
const BlogPostSchema = mongoose.Schema({
    thumbnailUrl: String,
    headerImgUrl: String,
    title: String,
    body: String,
    tags: [String],
    datePosted: String,
    author: String
});

module.exports = mongoose.model('BlogPost',BlogPostSchema);