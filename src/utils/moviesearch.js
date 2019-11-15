const request = require('request')


const movieSearch = (personSearch, callback) => {
    const url='http://www.omdbapi.com/?t=' + encodeURIComponent(personSearch) + '&apikey=15727907'
    console.log(url)
    request({ url, json:true},  (error,{body}) => {
        callback(undefined, body.Plot, body.Poster, body.Title, body.Year, body.Actors,body.Director)
    }
    )
}


module.exports = movieSearch