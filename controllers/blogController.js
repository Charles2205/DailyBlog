const home =(req,res)=>{
res.render('pages/home')    
}

const about =(req,res)=>{
    res.render('pages/about')    
}

const contact =(req,res)=>{
    res.render('pages/contact')    
}

const addPost =(req,res)=>{
    res.render('pages/add_post')    
}

module.exports={
    home,
    about,
    contact,
    addPost
    
}