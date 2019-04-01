//get environment
const dev = process.env.NODE_ENV !== 'production';

const middleware = {};

//Check if user is authenticated, if not, redirect to login
middleware.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated() ){//add || dev
        return next();
    } else {
        res.redirect('/');
    }
}

module.exports = middleware;