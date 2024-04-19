const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const generatePassword = require('./public/javascripts/index');


app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) =>{
  const result = req.body
  let password =  generatePassword(result)
  res.render('index', {password:password, result:result});
})




app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})