//Dependencies
const express = require('express');
const app = module.exports = express();
const morgan = require('morgan');
const compression = require('compression');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride  = require("method-override");

//import api Routes
const userRoutes = require('./routes/user');
const sitemetaRoutes = require('./routes/sitemeta');
const projectRoutes = require('./routes/project');

//Development environment setup [if in dev, you'll need a valid svars.json file]
const dev = process.env.NODE_ENV !== 'production';
const svarsFile = dev ? require('./config/svars.json') : {};
const PORT = dev ? 5000 : process.env.PORT;
const DB_URL = dev ? svarsFile.mongodb.db_dev : process.env.DB_URL;

//App Setup
app.use(express.static(path.resolve('build')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));


if(!dev){
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));
} else {
    app.use(morgan('dev'));
}

//Database Setup
mongoose.connect(DB_URL, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Routes
app.use('/api/user', userRoutes);
app.use('/api/sitemeta', sitemetaRoutes);
app.use('/api/projects', projectRoutes);

//Catch all
app.get('*', (req,res) => {
    res.sendFile(path.resolve('build', 'index.html'));
});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else if(!dev){
        console.log('Server successfully started');
    } else {
        console.log('DEV Server started! go to http://localhost:%s',PORT);
    }
});