module.exports = function(){
    const db = require('./db.json')
 const movies =   db.movies.map(movie=>{
    return {...movie,isLiked:false}
   })
return {movies}
    
} 