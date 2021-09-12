
const express = require('express');

const app = express();

app.listen(3000, () => {console.log('Listening the port 3000')});

app.get('/', (req, res)=> {
    console.log('req : ' + req );
    res.write('response ');
    res.end();
});

app.get('/courses', (req, res)=> {
    console.log('req : ' + req );
    res.send(JSON.stringify(['Angular', 'React', 'Vue']));
    res.end();
});

app.get('/courses/:id/:year/:month', (req, res)=> {
    console.log('req : ' + req );
    //res.send(req.params.id + ' ' + req.params.year + ' ' + req.params.month);
    res.send(req.query.orderBy);
    //http://localhost:3000/courses/12/2009/12?orderBy=year
    //req.params : id, year, month
    //req.query : year
    //req.params.id ---> 12
    //req.query.orderBy ---> year

    res.end();
});
