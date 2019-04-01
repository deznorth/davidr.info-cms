const mongoose = require('mongoose');

const sitemetaSchema = mongoose.Schema({
    Bio: {
        professional: {
            imgUrl: String,
            title: String,
            body: String
        },
        extra: {
            title: String,
            body: String
        }
    },
    socialLinks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SocialLink'
        }
    ]
});

module.exports = mongoose.model('Sitemeta',sitemetaSchema);