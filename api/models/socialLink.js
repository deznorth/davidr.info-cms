const mongoose = require('mongoose');

const socialLinkSchema = new mongoose.Schema({
    url: String,
    label: String,
    color: String,
    iconClass: String
});

module.exports = mongoose.model('SocialLink', socialLinkSchema);