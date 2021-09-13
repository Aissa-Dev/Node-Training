
const express = require('express');
const Joi = require('joi');
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

let courses = [ 
    {id: 1, title: 'angular'},
    {id: 2, title: 'react'},
    {id: 3, title: 'angular'}
]

app.get('/courses/:id', (req, res)=> {

    console.log('req : ' + req );

    let idCourse = parseInt(req.params.id);

    let course = courses.find(c => c.id ===idCourse);

    if (!course) {
        res.status(404).send('Course not found');
    } else {
        res.send(course.title)
    }


    res.end();
});

app.post('/api/courses', (req, res) => {
    const schema = Joi.object(
        {
            title : Joi.string().alphanum().min(3).max(10).required();
        }
    )

    const { value, error } = schema.validate(req.body);

    if (error) {
        res.status(400).send(error.details[0].message)
    }

    const course = {
        title: value.title,
        id: courses.length + 1
    }

    courses = [... courses, course]

    res.send(course);
})
