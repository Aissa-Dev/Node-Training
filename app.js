
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
    res.end();
});
