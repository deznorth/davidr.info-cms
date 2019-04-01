//Dependencies
const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//import api Routes
const sitemetaRoutes = require('./api/routes/sitemeta');

//Development environment setup [if in dev, you'll need a valid svars.json file]
const dev = app.get('env') !== 'production';
const svarsFile = dev ? require('./svars') : {};
const API_KEY = dev ? svarsFile.apikey : process.env.API_KEY;

//Database Setup
const DB_URL = dev ? svarsFile.dburl : process.env.DB_URL;
mongoose.connect(DB_URL, { useNewUrlParser: true });
//App Setup

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
app.use(bodyParser.urlencoded({extended:true}));

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

app.use('/api/sitemeta', sitemetaRoutes);

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, err => {
    if (err) throw err;
    console.log('Server successfully started');
});