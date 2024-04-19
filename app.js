const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const generatePassword = require('./public/javascripts/index');

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))

// Serving static files from the public directory
app.use(express.static('public'))

// Setting up the Handlebars engine
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

// Handling GET requests to the root route
app.get('/', (req, res) => {
  res.render('index')
})

// Handling POST requests to the root route
app.post('/', (req, res) =>{
  const result = req.body
  let password =  generatePassword(result)
  res.render('index', {password:password, result:result});
})

// Starting the server
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})