const express = require('express')
const dotEnv = require('dotenv')
const expressLayout = require('express-ejs-layouts')
const userRoute = require('./routes/blogRouter')
dotEnv.config()

const port = process.env.PORT
const app = express()


app.use('/,userRoute')

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})