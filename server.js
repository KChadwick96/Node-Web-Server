const express = require('express')
const hbs = require('hbs')

const app = express()

const MAINTENANCE_MODE = true

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')

app.use((req, res, next) => {
    const now = new Date().toString()
    console.log(`${now}: ${req.method} ${req.url}`)
    next()
})

app.use((req, res, next) => {
    if(MAINTENANCE_MODE) {
        res.render('maintenance.hbs', {
            title: 'Site Under Maintenance'
        })
    } else {
        next()
    }
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.send({
        message: 'Hello!',
        quantity: 200
    })
})

app.get('/hello', (req, res) => {
    res.send('Hello world!')
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page'
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error handling request'
    })
})

app.listen(3000)

module.exports = app