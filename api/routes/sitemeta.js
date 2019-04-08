const express = require('express');
const router = express.Router();

//Middleware
const Auth = require('../middleware/auth');

//Models
const Sitemeta = require('../models/sitemeta');
const SocialLink = require('../models/socialLink');

//CREATE
router.post('/socialLink', Auth.checkToken, (req,res) => {
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
                    res.status(500).json({
                        success:false,
                        message: 'Error while creating socialLink',
                        error: err
                    });
                } else {
                    socialLink.save();
                    sitemeta.socialLinks.push(socialLink);
                    sitemeta.save();
                    res.status(200).json({
                        success:true,
                        message: 'successfully created socialLink',
                        socialLink: socialLink
                    });
                }
            });
        }
    });
});

//READ
router.get('/', Auth.checkToken, (req,res) => {
    Sitemeta.findOne({}, { _id: 0 }).populate('socialLinks').exec((err, sitemeta) => {
        if(err) console.log(err);
        else{
            res.json(sitemeta);
        }
    });
});

router.get('/bio/professional', (req,res) => {
    Sitemeta.findOne({}, { profBio:1, _id: 0 }, (err, sitemeta) => {
        if(err) console.log(err);
        else{
            res.json(sitemeta.profBio);
        }
    });
});

router.get('/bio/extra', (req,res) => {
    Sitemeta.findOne({}, { extBio:1, _id: 0 }, (err, sitemeta) => {
        if(err) console.log(err);
        else{
            res.json(sitemeta.extBio);
        }
    });
});

router.get('/socialLinks', (req,res) => {
    Sitemeta.findOne({}, { socialLinks:1, _id: 0 }).populate('socialLinks').exec((err, sitemeta) => {
        if(err) console.log(err);
        else{
            res.json(sitemeta);
        }
    });
});

//UPDATE

router.put('/socialLink', Auth.checkToken, (req,res) => {
    SocialLink.findOneAndUpdate({ _id: req.body.id }, { 
        url: req.body.url,
        label: req.body.label,
        color: req.body.color,
        iconClass: req.body.iconClass
     },
     {
        new: true //return the updated object rather than the original
     }, (err, socialLink) => {
        if(err){
            console.log(err);
            res.status(500).json({
                success:false,
                message: 'error while updating socialLink',
                error: err
            });
        } else {
            res.status(200).json({
                success:true,
                message: 'successfully updated socialLink',
                updated: socialLink
            });
        }
    });
});

router.put('/bio/professional', Auth.checkToken, (req,res) => {
    Sitemeta.findOneAndUpdate({}, {
        profBio: {
            imgUrl: req.body.imgUrl,
            title: req.body.title,
            body: req.body.body
        }
    },
    {
        new: true //return the updated object rather than the original
    }, (err, bio) => {
        if(err){
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'error while updating profBio',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'successfully updated profbio',
                updated: bio
            });
        }
    });
})

router.put('/bio/extra', Auth.checkToken, (req,res) => {
    Sitemeta.findOneAndUpdate({}, {
        extBio: {
            title: req.body.title,
            body: req.body.body
        }
    },
    {
        new: true //return the updated object rather than the original
    }, (err, bio) => {
        if(err){
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'error while updating extBio',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'successfully updated extbio',
                updated: bio
            });
        }
    });
})

//DESTROY
router.delete('/socialLink', Auth.checkToken, (req,res) => {
    SocialLink.findOneAndDelete({ _id:req.body.id }, (err, socialLink) => {
        if(err){
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'error while deleting socialLink',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'socialLink deleted successfully',
                deleted: socialLink
            });
        }
    });
});

module.exports = router;