//const pug = require('pug');
const express = require('express');
const app = express();

app.listen(4000, ()=>{
    console.log('is lestenig')
})
app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', (req, res)=>{
    res.render('index',{title:'pug page', content:'this is content'});
    res.end();
});