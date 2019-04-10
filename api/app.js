//Dependencies
const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride  = require("method-override");
const app = module.exports = express();

//import api Routes
const userRoutes = require('./routes/user');
const sitemetaRoutes = require('./routes/sitemeta');
const projectRoutes = require('./routes/project');

//Development environment setup [if in dev, you'll need a valid svars.json file]
const dev = app.get('env') !== 'production';
const svarsFile = dev ? require('./config/svars.json') : {};

//App Setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve( 'client', 'build')));
app.use(express.json());
app.use(methodOverride("_method"));
const PORT = process.env.PORT || 5000;

if(!dev){
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));
}

if(dev){
    app.use(morgan('dev'));
}

//Database Setup
const DB_URL = dev ? svarsFile.mongodb.db_dev : process.env.DB_URL;
mongoose.connect(DB_URL, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Routes
app.use('/api/user', userRoutes);
app.use('/api/sitemeta', sitemetaRoutes);
app.use('/api/projects', projectRoutes);

//Catch all
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