const express = require('express')
const dotEnv = require('dotenv')
const blogRoute = require('./routes/blogRouter')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
const sequel = require('./database/dbConnect')



dotEnv.config()
const port = process.env.PORT || 4301

const app = express()



app.set('view engine','ejs')

// adding middlewares
app.use(express.static('public'))
app.use(expressLayouts)
app.use(express.urlencoded({extended:false}))

app.use('/',blogRoute)



const startServer=async()=>{
    try{
        await sequel.authenticate()
        app.listen(port,()=>{
        
            console.log(`Server is running on http://localhost:${port}`)
        });
    }catch(err){
        console.log(err);
    }
}

startServer()