//Dependencies
const express = require('express');
const app = express();
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

// Routes

app.use('/api/user', userRoutes);
app.use('/api/sitemeta', sitemetaRoutes);
app.use('/api/projects', projectRoutes);

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, err => {
    if (err) throw err;
    if(!dev){
        console.log('Server successfully started');
    } else {
        console.log('DEV Server started! go to http://localhost:%s',PORT);
    }
});