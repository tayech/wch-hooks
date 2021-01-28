import React from 'react'
import MovieCard from './MovieCard/MovieCard'
const  MovieList=({movies})=> {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap"}}>
        {movies.map((movies, index) => (
         <MovieCard movies={movies} key={index}/> )) }
        </div>
    )
}
export default MovieList;