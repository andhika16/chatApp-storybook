const Joi = require('joi');
const express = require('express');
const app = express();




const genres = [
    { id: 1, genre: 'action' },
    { id: 2, genre: 'horror' },
    { id: 3, genre: 'comedy' },
]

app.get('/api/genres/', (req, res) => {
    res.send(genres);
})


app.get('/api/genres/:id', (req, res) => {
    const genre = notFound(req.params.id, res);
    res.send(genre);
})

app.post('/api/genres/', (req, res) => {



    // const { error } = validateCourse(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genres.length + 1,
        genre: req.body.genre
    }

    genres.push(genre);
    res.send(genre)

});


function notFound(req, res) {
    const genre = genres.find(c => c.id === parseInt(req));
    if (!genre) {
        res.status(404).send('The genre with given Id is not found')
    };

    return genre;

}
function validateCourse(course) {
    // validation function
    const schema = {
        genre: Joi.string().min(3).required()
    }

    return Joi.validate(course, schema);
}


const port = process.env.port || 3000
app.listen(port, () => console.log(`listening on port ${port}`))




