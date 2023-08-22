const express = require('express')
const {home,about,contact,viewPost,createPost}=require('../controllers/blogController.js')

const app = express.Router()

app.get('/',home)
app.get('/about',about)
app.get('/contact',contact)
app.get('/posts',viewPost)
app.post('/posts',createPost)

module.exports = app