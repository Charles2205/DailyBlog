const blog = require('../database/models/blog')
const home =async(req,res)=>{
 const blogs = await blog.findAll()
 
    res.render('pages/home')    
}

const about =(req,res)=>{

    res.render('pages/about')    
}

const contact =(req,res)=>{
    res.render('pages/contact')    
}

const viewPost =(req,res)=>{
    res.render('pages/add_post')    
}

const createPost=async (req,res)=>{
    const {title,description,author} =req.body
    //to insert data to the db 
    await blog.create({title,description,author})
    res.redirect('/')
}

module.exports={
    home,
    about,
    contact,
    viewPost,
    createPost,
    
}