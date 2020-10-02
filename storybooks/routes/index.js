const express = require('express'),
    route = express.Router(),
    {
        ensureAuth,
        ensureGuest
    } = require('../middleware/auth'),
    Story = require('../models/Story');


//  @desc login/landing page
//  @route GET / 
route.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

//  @desc Dashboard
//  @dashboard GET / 
route.get('/dashboard', ensureAuth, async (req, res) => {

    try {
        const stories = await Story.find({
            user: req.user.id
        }).lean()
        res.render('dashboard', {
            name: req.user.firstName,
            stories
        })
    } catch (err) {
        console.log(err);
        res.render('error/500')
    }


})




module.exports = route;