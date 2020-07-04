'use strict';

const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./module/blog');


// connect to mongo db
const dbURI = 'mongodb+srv://andhika:dhika.12345@node-tuts.4yfq2.mongodb.net/nodetuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(3000, () => {
            console.log('server running on port... & connect to db');
        })
    })
    .catch(err => console.log(err))




// registering view engnine
app.set('view engine', 'ejs');

// midlleware & static files
app.use(morgan('dev'));
app.use(express.static('public'));


// routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
});
// blog & routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((results) => {
            res.render('index', { title: 'All Blogs', blogs: results })
        })
        .catch(err => res.send(err))
})
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
});


