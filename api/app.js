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
const PORT = dev ? 5000 : process.env.PORT;

//App Setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve('build')));
app.use(express.json());
app.use(methodOverride("_method"));


if(!dev){
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));
}

if(dev){
    app.use(morgan('dev'));
    app.use(cors());
}

//Database Setup
const DB_URL = dev ? svarsFile.mongodb.db_dev : process.env.DB_URL;
mongoose.connect(DB_URL, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Routes
//app.use('/api/user', userRoutes);
//app.use('/api/sitemeta', sitemetaRoutes);
//app.use('/api/projects', projectRoutes);

//Catch all
app.get('*', (req,res) => {
    res.sendFile(path.resolve('build', 'index.html'));
});

app.listen(PORT, err => {
    if (err) console.log(err);
    if(!dev){
        console.log('Server successfully started');
    } else {
        console.log('DEV Server started! go to http://localhost:%s',PORT);
    }
});