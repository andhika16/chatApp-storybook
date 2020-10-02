const express = require('express'),
    route = express.Router(),
    {
        ensureAuth
    } = require('../middleware/auth'),
    Story = require('../models/Story');


//  @desc show add Page
//  @route GET /stories/add
route.get('/add', ensureAuth, (req, res) => {
    res.render('stories/add')
})

//  @desc Process add form
//  @route POST /stories/add
route.post('/', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id
        await Story.create(req.body)
        res.redirect('/dashboard')
    } catch (error) {
        console.error(error);
        res.render('error/500')
    }
})





module.exports = route;