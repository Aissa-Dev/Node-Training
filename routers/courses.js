const express = require('express');
const router = express.Router();

let courses = [ 
    {id: 1, title: 'angular'},
    {id: 2, title: 'react'},
    {id: 3, title: 'angular'}
];
router.get('/', (req, res) => {
    console.log('routes')
    res.send(courses);
})

router.post('/', (req, res) => {
    const { value, error } = validateCourse(req.body);

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

router.delete('/:id', (req, res) => {

    //verify if the course is alredy exist
    let course = courses.find(course => course.id === parseInt(req.params.id));

    if(!course) {
        res.status(400).send('course not found !')
    }

    //Delete Course
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //Send Response
    res.status(204).send({})  // 204 for no content //par convention on utulise un objet vide
});

module.exports = router;