const home =(req,res)=>{
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

const createPost=(req,res)=>{
    const {title,description,author} =req.body
    res.send({title,description,author})
}

module.exports={
    home,
    about,
    contact,
    viewPost,
    createPost,
    
}