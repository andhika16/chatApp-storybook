const express = require('express'),
    route = express.Router(),
    {
        ensureAuth,
        ensureGuest
    } = require('../middleware/auth');


//  @desc login/landing page
//  @route GET / 
route.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

//  @desc Dashboard
//  @dashboard GET / 
route.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard', {
        name: req.user.firstName
    })
})




module.exports = route;