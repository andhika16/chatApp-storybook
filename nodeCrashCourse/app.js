"use strict";

const express = require('express');
const morgan = require('morgan');
const app = express();

app.listen(3000, () => {
    console.log('server running on port...');
})


// app.use(morgan('dev'));
app.use(express.static('public'));

// registering view engnine
app.set('view engine', 'ejs');

// listen for request
app.get('/', (req, res) => {
    const blogs = [
        { title: 'yoshi find eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing' },
        { title: 'Mario defeat browser', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing' },
        { title: 'jose catch chickens', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing' }
    ]

    // res.sendFile('./views/index.html', { root: __dirname });
    res.render('index', { title: 'Home', blogs })
});

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' })
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
})

// 404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404' })
});


