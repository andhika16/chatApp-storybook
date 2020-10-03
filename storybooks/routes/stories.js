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

//  @desc show add Page
//  @route GET /stories/add
route.get('/:id', ensureAuth, async (req, res) => {
    try {
        const story = await Story.findById(req.params.id)
            .populate('user')
            .lean()

        res.render('stories/show', {
            story,
        })
    } catch (err) {
        console.error(err);
        res.render('error/404')
    }

})

//  @desc show add Page
//  @route GET /stories/add
route.get('/', ensureAuth, async (req, res) => {
    try {

        const stories = await Story.find({
                status: 'public'
            })
            .populate('user')
            .sort({
                createdAt: 'desc'
            })
            .lean()

        if (!stories) {
            return res.render('error/404')
        }


        res.render('stories/index', {
            stories,
        })
    } catch (err) {
        console.error(err);
    }

})

//  @desc show edit page
//  @route GET /stories/edit/:id
route.get('/edit/:id', ensureAuth, async (req, res) => {

    try {
        const story = await Story.findOne({
            _id: req.params.id
        }).lean()

        if (!story) {
            return res.render('error/404')
        }

        if (story.user != req.user.id) {
            return res.redirect('/stories')
        } else {
            res.render('stories/edit', {
                story,
            })
        }
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }


})


//  @desc  update story
//  @route PUT /:id
route.put('/:id', ensureAuth, async (req, res) => {


    try {
        let story = await Story.findById(req.params.id).lean()

        if (!story) {
            return res.render('error/404')
        }

        if (story.user != req.user.id) {
            return res.redirect('/stories')
        } else {
            story = await Story.findByIdAndUpdate({
                _id: req.params.id
            }, req.body, {
                new: true,
                runValidators: true
            })
            res.redirect('/dashboard')
        }

    } catch (error) {
        console.error(error)
        res.render('error/500')
    }




})



//  @desc Delete story
//  @route DELETE /stories/:id
route.delete('/:id', ensureAuth, async (req, res) => {

    try {
        await Story.remove({
            _id: req.params.id
        })
        res.redirect('/dashboard')

    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//  @desc User Stories
//  @route GET /stories/user/userId
route.get('/user/:userId', ensureAuth, async (req, res) => {
    try {
        const stories = await Story.find({
                user: req.params.userId,
                status: 'public'

            })
            .populate('user')
            .lean()

        res.render('stories/index', {
            stories
        })

    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})




module.exports = route;