const jwt = require('jsonwebtoken');
const svarsFile = require('../../svars.json');
const jwtSecret = svarsFile.auth.jwtSecret || process.env.JWT_SECRET;

const auth = {};

auth.checkToken = (req,res,next) => {
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

module.exports = auth;