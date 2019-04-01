const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

//Models
const Project = require('../models/project');
const BlogPost = require('../models/blogPost');

//Create
router.post('/create', middleware.isLoggedIn, (req,res) => {
    if(req.body.blogPost && req.body.blogPost !== ''){
        Project.create({
            isHighlighted: req.body.isHighlighted,
            imgUrl: req.body.imgUrl,
            title: req.body.title,
            description: req.body.description,
            repoUrl: req.body.repoUrl,
            liveUrl: req.body.liveUrl,
            blogPost: req.body.blogPost,
            tags: req.body.tags,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        }, (err, project) => {
            if(err){
                console.log(err);
                res.status(500).json({
                    status: 'Error while creating project',
                    error: err
                });
            } else {
                res.status(200).json({
                    status: 'success',
                    created: project
                });
            }
        });
    } else {
        Project.create({
            isHighlighted: req.body.isHighlighted,
            imgUrl: req.body.imgUrl,
            title: req.body.title,
            description: req.body.description,
            repoUrl: req.body.repoUrl,
            liveUrl: req.body.liveUrl,
            tags: req.body.tags,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        }, (err, project) => {
            if(err){
                console.log(err);
                res.status(500).json({
                    status: 'Error while creating project',
                    error: err
                });
            } else {
                res.status(200).json({
                    status: 'success',
                    created: project
                });
            }
        });
    }
});

//Read
router.get('/', (req,res) => {
    Project.find({}, (err, projects) => {
        if(err){
            console.log(err);
            res.status(500).json({
                status: 'Error while getting projects',
                error: err
            })
        } else {
            res.json(projects);
        }
    });
});

//Update

//Destroy

module.exports = router;