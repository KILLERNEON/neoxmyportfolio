const express = require('express')
const app = express()
const hbs = require('hbs')
const { dirname } = require('path')
const port = process.env.PORT || 3000
const path = require('path')
//path 
const templete = path.join(__dirname,'/partials') 
const views = path.join(__dirname,'/views')
const css = path.join(__dirname,'../public/files/css-files')
const js = path.join(__dirname,'../public/files/js-files')
const img = path.join(__dirname,'../public/photo/img')
const logo = path.join(__dirname,'../public/photo/logo')
// console.log(css)
// set view engines
app.set('view engine','hbs')
app.set('views',views)
hbs.registerPartials(templete)
// configaration
app.use(express.static(css))
app.use(express.static(img))
app.use(express.static(logo))
app.use(express.static(js))
//    routing
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/skill',(req,res)=>{
    res.render('skill')
})
app.get('/service',(req,res)=>{
    res.render('service')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/singup',(req,res)=>{
    res.render('singup')
})
//server making
app.listen(port,(errr)=>{
    if(errr) throw err
    console.log(`your code is running on localhost:${port}`)
})