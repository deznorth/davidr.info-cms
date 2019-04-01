const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');

//Create
router.post('/new', (req,res) => {
    const newUser = new User({ username: req.body.username });

    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            console.log(err);
            res.status(500).json({
                status: 'Error while registering user',
                error: err
            })
        } else {
            passport.authenticate('local')(req,res, () => {
                res.status(200).json({
                    status: 'success'
                });
            });
        }
    });
});

//Read
router.get('/all', (req,res) => {
    User.find({}, (err, users) => {
        if(err){
            console.log(err);
            res.status(500).json({
                status: 'Error while getting users',
                error: err
            });
        } else {
            res.status(200).json(users);
        }
    });
});

router.get('/:id', (req,res) => {
    User.findById(req.params.id, (err, user) => {
        if(err){
            console.log(err);
            res.status(500).json({
                status: 'Error while getting user',
                error: err
            });
        } else {
            res.status(200).json(user);
        }
    });
});

//Login
router.post('/', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/'
}), (req, res) => {

});

//Logout
router.get('/logout', (req,res) => {
    req.logout();
    res.redirect('/');
});

//Destroy
router.delete('/remove/:id', (req,res) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
        if(err){
            console.log(err);
            res.status(500).json({
                status: 'Error while removing user',
                error: err
            });
        } else {
            res.status(200).json({
                status: 'success',
                removed: user
            });
        }
    });
});

module.exports = router;