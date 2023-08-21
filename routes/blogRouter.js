const express = require('express')
const {home,about,contact,addPost}=require('../controllers/blogController.js')

const app = express.Router()

app.get('/',home)
app.get('/about',about)
app.get('/contact',contact)
app.get('/addpost',addPost)

module.exports = app