//Dependencies
const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride  = require("method-override");
const passport = require('passport');
const localStrategy = require('passport-local');

const { isLoggedIn } = require('./api/middleware');

//Models
const User = require('./api/models/user');

//import api Routes
const userRoutes = require('./api/routes/user');
const sitemetaRoutes = require('./api/routes/sitemeta');
const projectRoutes = require('./api/routes/project');

//Development environment setup [if in dev, you'll need a valid svars.json file]
const dev = app.get('env') !== 'production';
const svarsFile = dev ? require('./svars') : {};
const SESSION_SECRET = dev ? svarsFile.sessionSecret : process.env.SESSION_SECRET;

//Database Setup
const DB_URL = dev ? svarsFile.dburl : process.env.DB_URL;
mongoose.connect(DB_URL, { useNewUrlParser: true });
//App Setup

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

if(!dev){
    app.disable('x-powered-by');
    app.use(express.static(path.resolve(__dirname, 'build')));
    app.use(compression());
    app.use(morgan('common'));
}

if(dev){
    app.use(express.static(path.resolve(__dirname, 'build')));
    app.use(morgan('dev'));
}

/* 
    Passport Config
*/

app.use(require('express-session')({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes

app.use('/api/user', userRoutes);
app.use('/api/sitemeta', sitemetaRoutes);
app.use('/api/projects', projectRoutes);

app.get('*', isLoggedIn, (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, err => {
    if (err) throw err;
    console.log('Server successfully started');
});