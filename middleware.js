const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const logged = require('./logged')

app.listen(4000, () => {console.log('starting listening...')});

// middlewares of Express
app.use(express.json()); // for req.body
app.use(express.urlencoded()); // for url content
app.use(express.static('public')); // for public files


//integrated middleware
app.use(morgan('tiny')); // to log status, time duration .. banchmarking
app.use(helmet); // secure header...




app.get('/', logged.log );// personel middleware

app.use((req, res) => {
    console.log('notfound')
    res.send('page not found');
});


