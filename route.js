const express = require('express');
const app = express();
const courses = require('./routers/courses');


app.listen(5000, (req, res) => { console.log('listenning')});

app.use('/api/courses', courses);