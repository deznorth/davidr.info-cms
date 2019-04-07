const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Auth = require('../middleware/auth');

const User = require('../models/User');

const svarsFile = require('../../svars.json');
const saltRounds = svarsFile.auth.saltRounds || process.env.SALT_ROUNDS;
const jwtSecret = svarsFile.auth.jwtSecret || process.env.JWT_SECRET;

//Create
router.post('/create', Auth.checkToken, (req,res) => {
    const { body } = req;
    const {
        username,
        password: plainPassword
    } = body;

    const newUser = {
        username: username
    }

    bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
        if(err){
            console.log('Error while hashing password');
            res.status(500).json({
                success: false,
                message: `Failed to register user ${username}`,
                error: err
            });
        } else {

            newUser.password = hash;

            User.create(newUser, (err, newuser) => {
                if(err){
                    console.log('Error while creating user');
                    if(err.errors.username){
                        res.status(500).json({
                            success: false,
                            message: `Error: Username "${username}" already exists`
                        });
                    } else {
                        res.status(500).json({
                            success: false,
                            message: `Failed to register user ${username}`,
                            error: err
                        });
                    }
                    
                } else {
                    res.status(200).json({
                        success: true,
                        message: `Successfully registered user ${username}`
                    })
                }
            });
        }
    });
});

//Read: All
router.get('/all', Auth.checkToken, (req,res) => {
    User.find({}, (err, users) => {
        if(err){
            console.log(`Error retrieving all users:\n${err}`);
            res.status(500).json({
                success: false,
                message: 'An error ocurred while retrieving all users',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                users: users,
                entries: users.length
            });
        }
    });
});

//Read: One
router.get('/:id', Auth.checkToken, (req,res) => {
    User.findOne({_id:req.params.id}, (err, user) => {
        if(err){
            console.log(`Error retrieving user with id ${req.params.id}:\n${err}`);
            res.status(500).json({
                success: false,
                message: `An error ocurred while retrieving user with id ${req.params.id}`,
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                user: user
            });
        }
    });
});

//Destroy
router.delete('/remove/:id', Auth.checkToken, (req,res) => {
    User.findOneAndDelete({_id:req.params.id}, (err, user) => {
        if(err){
            console.log(`Error removing user with id ${req.params.id}:\n${err}`);
            res.status(500).json({
                success: false,
                message: `An error ocurred while removing user with id ${req.params.id}`,
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                removed: user
            });
        }
    });
});

//Login
router.post('/login', (req,res) => {
        
    if(!(req.body.username && req.body.password)){
        res.json({
            success:false,
            message:'Username & password are required'
        });
        res.end();
    } else {

    const { username, password } = req.body;

    User.findOne({username: username}, (err, user) => {
        if(err || !user){
            res.json({
                success: false,
                message: `User "${username}" does not exist.`
            });
        } else {
            bcrypt.compare(password, user.password, (err, result) => {
                if(err){
                    console.log(err)
                } else {
                    if(!result){
                        res.json({
                            success: false,
                            message: 'Incorrect password'
                        });
                    } else {
                        const token = jwt.sign({user: username}, jwtSecret);
                        res.json({
                            success:true,
                            message: `Welcome back ${username}`,
                            token: token
                        });
                    }
                }
            });
        }
    });
}
});

module.exports = router;