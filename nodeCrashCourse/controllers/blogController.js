const Blog = require('../module/blog.js');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((results) => {
            res.render('blogs/index', { blogs: results, title: 'All Blogs' })
        })
        .catch(err => res.send(err))
};


const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create new blogs ' });
};

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then((results) => {
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
};

const blog_detail = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then(results => {
            res.render('blogs/details', { blog: results, title: 'Details' })
        })
        .catch(err => console.log(err))
};


const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(() => {
            res.json({ redirect: '/blogs' })
        })
        .catch(err => console.log(err))

};

module.exports = {
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_detail,
    blog_delete
};