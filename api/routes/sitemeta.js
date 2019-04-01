const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

const Sitemeta = require('../models/sitemeta');
const SocialLink = require('../models/socialLink');

router.use(middleware.checkApiKey);

//CREATE
router.post('/socialLink', (req,res) => {
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
router.get('/', (req,res) => {
    Sitemeta.find({}, { _id: 0 }).populate('socialLinks').exec((err, sitemeta) => {
        if(err) console.log(err);
        else{
            res.json(sitemeta);
        }
    });
});

router.get('/bio', (req,res) => {
    Sitemeta.find({}, { Bio:1, _id: 0 }, (err, sitemeta) => {
        if(err) console.log(err);
        else{
            res.json(sitemeta);
        }
    });
});

router.get('/socialLinks', (req,res) => {
    Sitemeta.find({}, { socialLinks:1, _id: 0 }).populate('socialLinks').exec((err, sitemeta) => {
        if(err) console.log(err);
        else{
            res.json(sitemeta);
        }
    });
});

//UPDATE

router.put('/socialLink', (req,res) => {
    SocialLink.findOneAndUpdate({ _id: req.body.id }, { 
        url: req.body.url,
        label: req.body.label,
        color: req.body.color,
        iconClass: req.body.iconClass
     }, (err, socialLink) => {
        if(err){
            console.log(err);
            res.status(500).json({
                status: 'error',
                error: err
            });
        } else {
            res.status(200).json({
                status: 'success',
                updated: socialLink
            });
        }
    });
});

router.put('/bio', (req,res) => {
    Sitemeta.findOneAndUpdate({}, {
        Bio: {
            professional: {
                imgUrl: req.body.imgUrl,
                title: req.body.profTitle,
                body: req.body.profBody
            },
            extra: {
                title: req.body.exTitle,
                body: req.body.exBody
            }
        }
    }, (err, bio) => {
        if(err){
            console.log(err);
            res.status(500).json({
                status: 'error while updating Bio',
                error: err
            });
        } else {
            res.status(200).json({
                status: 'successfully updated bio',
                updated: bio
            });
        }
    });
})

//DESTROY

router.delete('/socialLink', (req,res) => {
    SocialLink.findOneAndDelete({ _id:req.body.id }, (err, socialLink) => {
        if(err){
            console.log(err);
            res.status(500).json({
                status: 'error while deleting socialLink',
                error: err
            });
        } else {
            res.status(200).json({
                status: 'success',
                deleted: socialLink
            });
        }
    });
});

module.exports = router;