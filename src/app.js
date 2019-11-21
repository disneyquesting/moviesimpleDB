const path = require('path')
const express = require('express')
const hbs = require('hbs')

const movieSearch = require('./utils/moviesearch.js')
const app = express()

const port = process.env.PORT || 3000

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicPath))

app.get('', (req,res) => {
    res.render('index')
})

app.get('/movie', (req,res) =>{

    movieSearch(req.query.movie, (error, data, poster, title, year, actors,director) => {
        res.send({
            plot: data,
            poster,
            title,
            year,
            actors,
            director
        })
        
    })
})
app.get('*', (req,res) => {
    res.send("404 Page Not Found")
})

app.listen(port, ()=> {
    console.log("Server init complete is up on port " + port)
})