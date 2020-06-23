const Joi = require('joi');
const express = require('express');
const app = express();



const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
]


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!!!')
})



app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});


app.get('/api/courses/:id', (req, res) => {
    const courses = course.find(c => c.id === parseInt(req.params.id));
    if (!courses) res.status(404).send('404 ID not Found');
    res.send(courses);
})


app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body, schema);


    // this code below is manual error handling.
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }


    const course = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course);
    res.send(course)

});



const port = process.env.port || 3000
app.listen(port, () => console.log(`listening on port ${port}`))

