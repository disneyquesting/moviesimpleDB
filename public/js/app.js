
const moviesSearch = document.querySelector('form')
const movietitle = document.querySelector('input')


moviesSearch.addEventListener('submit',(e) => {
    e.preventDefault()
    document.getElementById("whatdoyouwant").innerHTML = ""
    const movies = movietitle.value

    fetch('/movie?movie=' + movies).then((response) => {
        response.json().then((data) => {
            if(!data.title) {
                document.getElementById("movietitle").innerHTML = "Movie Not Found"
                document.getElementById("movieplot").innerHTML = "Please try again."
                document.getElementById("movieposter").src = "../img/donald.gif"
                document.getElementById("movieyear").innerHTML = ""
                document.getElementById("movieactors").innerHTML = ""
                document.getElementById("moviedirector").innerHTML = ""
            
                console.log(data.error)
            } else{
                document.getElementById("movietitle").innerHTML = data.title
                document.getElementById("movieplot").innerHTML = data.plot
                document.getElementById("movieposter").src = data.poster
                document.getElementById("movieyear").innerHTML = data.year
                document.getElementById("movieactors").innerHTML = "Starring " + data.actors
                document.getElementById("moviedirector").innerHTML = "Directed by " + data.director
                document.body.style.background = 'linear-gradient(to right bottom, rgba(1,1,2,1),rgba(21,12,20,1), rgba(38,18,24,.95), rgba(52,24,19,0.95), rgba(57,36,8,0.98)),url("' + data.poster + '")';
                document.body.style.backgroundSize = 'cover'
                document.body.style.backgroundPosition = "center center"
            }
        })
    })
})
