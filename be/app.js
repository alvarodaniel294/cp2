var express = require('express');
var morgan = require('morgan');
var body_parser = require('body-parser');
// var compression = require('compression');
// var filter = require('content-filter');
var cors = require('cors');
var db = require('./models/db');
var app = express();
process.env.TZ = 'America/La_Paz';


//middlewares
app
    .use(cors())
    
    //    .use(compression())
    .use('/', express.static(__dirname + '/public'))
    .use(morgan('dev'))
    .use(body_parser.urlencoded({ extended: true }))
    .use(body_parser.json())
    //    .use(filter())// filter injections nosql
    .use(function (req, res, next) {
        var token = typeof req.headers["authorization"] != 'undefined' ? req.headers["authorization"] : null;
        req.body.token = token;
        next();

    });


app.get('/', function (req, res) {
    res.sendfile('public/index.html', { root: __dirname })
});

//routes 
app
    .use('/pages', require('./routes/page'))
    .use('/events', require('./routes/events'))
    .use('/facilitators', require('./routes/facilitators'))
    .use('/persons', require('./routes/persons'))
    .use('/programs', require('./routes/programs'))
    .use('/offices', require('./routes/offices'))
    .use('/consults', require('./routes/consults'))
    .use('/workshops', require('./routes/workshops'))
    .use('/users', require('./routes/users'))
    .use('/company', require('./routes/company'))
    .use(function (err, req, res, next) {
        console.error(err.stack);
        return res.status(err.status || 500).send('Not Found');
    });

    

//   db.
//If need initialize db 
if (false) {
    const init = require('./models/init');
    // init.clearCollections();
    init.initializer();
}
db.connection();

//start app
app.listen(3000, function () {
    console.log('Example app listening at http://localhost:3000');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', db.endMongoConnection)
    .on('SIGTERM', db.endMongoConnection);

module.exports = app;