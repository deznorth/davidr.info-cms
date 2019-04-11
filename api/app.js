//Dependencies
const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride  = require("method-override");
const cors = require('cors');
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
app.use(express.static(path.resolve('build')));
app.use(express.json());
app.use(methodOverride("_method"));
const PORT = process.env.PORT || 5000;

const corsWhitelist = [
    'http://man.davidr.info/',
    'https://davidrojasportfolio-cms.herokuapp.com/',
    'https://www.davidr.info/'
];

if(!dev){
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));
    app.use(cors({
        origin: (origin, callback) => {
            if(corsWhitelist.indexOf(origin) !== -1){
                callback(null,true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        optionsSuccessStatus: 200
    }));
}

if(dev){
    app.use(morgan('dev'));
    app.use(cors());
}

app.options('*', cors());

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