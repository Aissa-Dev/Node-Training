const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const logged = require('./logged');
const config = require('config');

app.listen(4000, () => {console.log('starting listening...')});



// middlewares of Express
app.use(express.json()); // for req.body
app.use(express.urlencoded()); // for url content
app.use(express.static('public')); // for public files

//integrated middleware
app.use(morgan('tiny')); // to log status, time duration .. banchmarking
app.use(helmet); // secure header...

app.get('/', logged.log );// personel middleware

console.log(`NODE ENV: ${process.env.NODE_ENV}`);
console.log(`mode: ${app.get('env')}`);
//configuration
console.log(`application name : ${config.get('name')}`);
console.log(`mail server : ${config.get('mail.host')}`);
console.log(`mail password : ${config.get('mail.password')}`);

app.use((req, res) => {
    console.log('notfound')
    res.send('page not found');
});
