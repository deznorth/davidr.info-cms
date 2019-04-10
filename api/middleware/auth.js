const jwt = require('jsonwebtoken');

const dev = process.env.NODE_ENV !== 'production';
const svarsFile = dev ? require('../config/svars.json') : {};
const jwtSecret = dev ? svarsFile.auth.jwtSecret : process.env.JWT_SECRET;

const auth = {};

auth.checkToken = (req,res,next) => {
    if(dev) next();
    else {
        if(req.query.token){
            jwt.verify(req.query.token, jwtSecret, (err, decoded) => {
                if(err){
                    res.json({
                        success: false,
                        message: 'Invalid Token'
                    });
                } else {
                    next();
                }
            });
        } else {
            res.status(401).json({
                success: false,
                message: 'Must use token'
            });
        }
    }
}

module.exports = auth;