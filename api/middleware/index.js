//get environment
const dev = process.env.NODE_ENV !== 'production';
const svarsFile = dev ? require('../../svars') : {};
const API_KEY = dev ? svarsFile.apikey : process.env.API_KEY;

const middleware = {};

//Checks for API_KEY, when in 'dev' you don't need an api key
middleware.checkApiKey = (req, res, next) => {
    if(req.query.apikey == API_KEY || dev){
        next();
    } else {
        res.status(403).send('api key could not be found or is invalid');
    }
}

module.exports = middleware;