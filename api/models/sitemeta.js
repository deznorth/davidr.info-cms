const mongoose = require('mongoose');

const sitemetaSchema = mongoose.Schema({
    Bio: {
        professional: {
            imgUrl: { type:String, required:true },
            title: { type:String, default:'About Me'},
            body: { type:String, required:true }
        },
        extra: {
            title: { type:String, required:true },
            body: { type:String, required:true }
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