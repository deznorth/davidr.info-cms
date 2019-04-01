const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

const Sitemeta = require('../models/sitemeta');
const SocialLink = require('../models/socialLink');

router.use(middleware.checkApiKey);

//CREATE
router.post('/create/socialLink', (req,res) => {
    Sitemeta.findOne({}, (err, sitemeta) => {
        if(err){
            console.log(err);
            res.status(500).send(`Error while retrieving Sitemeta:\n${err}`);
        } else {
            SocialLink.create({
                url: req.body.url,
                label: req.body.label,
                color: req.body.color,
                iconClass: req.body.iconClass
            }, (err, socialLink) => {
                if(err){
                    console.log(err);
                    res.status(500).send(`Error while creating socialLink:\n${err}`);
                } else {
                    socialLink.save();
                    sitemeta.socialLinks.push(socialLink);
                    sitemeta.save();
                    res.status(200).json({
                        status: 'success',
                        socialLink: socialLink
                    });
                }
            });
        }
    });
});

//READ
router.get('/read/bio', (req,res) => {
    Sitemeta.find({}, { Bio:1, _id: 0 }, (err, sitemeta) => {
        if(err) console.log(err);
        else{
            res.json(sitemeta);
        }
    });
});

router.get('/read/socialLinks', (req,res) => {
    Sitemeta.find({}, { socialLinks:1, _id: 0 }).populate('socialLinks').exec((err, sitemeta) => {
        if(err) console.log(err);
        else{
            res.json(sitemeta);
        }
    });
});

//UPDATE

//DESTROY

module.exports = router;