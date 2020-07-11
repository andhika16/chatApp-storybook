const express = require('express')
const routes = express.Router();
const { blog_create_get, blog_create_post, blog_delete, blog_detail, blog_index } = require('../controllers/blogController')

// create new blogs
routes.get('/create', blog_create_get);
// blog & routes
routes.get('/', blog_index);
// post request or insert data
routes.post('/', blog_create_post);
// detail info
routes.get('/:id', blog_detail);
// delete routes
routes.delete('/:id', blog_delete)



module.exports = routes;