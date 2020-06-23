const express = require('express');
const app = express();


const course = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
]





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



const port = process.env.port || 3000
app.listen(port, () => console.log(`listening on port ${port}`))

