import React from 'react'
import  AddMovies  from './Form/AddMovies'
import Movielist from './MovieList'
const  Main =({movies,AddMovie})=> {
    return (
        <div style={{marginTop:"60px"}}>
         <Movielist movies={movies}/> 
          <AddMovies AddMovie={AddMovie}/> 
        </div>
    )
}
export default Main;