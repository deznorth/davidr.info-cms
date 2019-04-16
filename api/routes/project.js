const express = require('express');
const router = express.Router();

//Middleware
const Auth = require('../middleware/auth');

//Models
const Project = require('../models/project');
const BlogPost = require('../models/blogPost');

//Create
router.post('/', Auth.checkToken, (req,res) => {
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
                    success: false,
                    message: 'Error while creating project',
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Project successfuly created',
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
                    success: false,
                    message: 'Error while creating project',
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Project successfuly created',
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
            res.status(500).json({
                success: false,
                Message: 'Error while getting projects',
                error: err
            })
        } else {
            res.json(projects);
        }
    });
});

//Update
router.put('/', Auth.checkToken, (req,res) => {
    const body = { ...req.body };

    const updatedProject = {
        isHighlighted: body.isHighlighted,
        title: body.title,
        description: body.description,
        repoUrl: body.repoUrl,
        liveUrl: body.liveUrl,
        tags: body.tags,
        startDate: body.startDate,
        endDate: body.endDate
    };

    if(body.imgUrl){
        updatedProject.imgUrl = body.imgUrl;
    }
    if(body.blogPost){
        updatedProject.blogPost = body.blogPost;
    }

    if(body._id){
        Project.findOneAndUpdate({_id:body._id}, updatedProject, { new: true },
            (err, updated) => {
                if(err){
                    res.json({
                        success: false,
                        message: `Error while updating project with id ${body._id}`,
                        error: err
                    });
                } else {
                    res.json({
                        success: true,
                        updated: updated
                    });
                }
            }
        );
    } else {
        res.json({
            success: false,
            message: 'Must provide a project id'
        })
    }
});

//Destroy
router.delete('/', Auth.checkToken, (req,res) => {
    const { _id } = req.body;

    Project.findOneAndDelete({ _id:_id }, (err, deleted) => {
        if(err){
            res.json({
                success: false,
                message: `Failed to delete project with id ${_id}`,
                error: err
            });
        } else {
            res.json({
                success: true,
                deleted: deleted
            });
        }
    });
});

module.exports = router;