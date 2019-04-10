//Dependencies
const express = require('express');
const app = module.exports = express();
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride  = require("method-override");

//import api Routes
const userRoutes = require('./api/routes/user');
const sitemetaRoutes = require('./api/routes/sitemeta');
const projectRoutes = require('./api/routes/project');

//Development environment setup [if in dev, you'll need a valid svars.json file]
const dev = app.get('env') !== 'production';
const svarsFile = dev ? require('./svars') : {};

//Database Setup
const DB_URL = dev ? svarsFile.mongodb.db_dev : process.env.DB_URL;
mongoose.connect(DB_URL, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
//App Setup

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname, 'build')));
const normalizePort = port => parseInt(port, 10);
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(methodOverride("_method"));

if(!dev){
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));
}

if(dev){
    app.use(morgan('dev'));
}

// Routes

app.use('/api/user', userRoutes);
app.use('/api/sitemeta', sitemetaRoutes);
app.use('/api/projects', projectRoutes);


app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, err => {
    if (err) console.log(err);
    if(!dev){
        console.log('Server successfully started');
    } else {
        console.log('DEV Server started! go to http://localhost:%s',PORT);
    }
});