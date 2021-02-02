import React from 'react'
import './MovieCard.css'
import Rate from '../Rate'
import {Link} from 'react-router-dom'
const MovieCard=({movies:{image,title,raiting,date,description,id}})=> {
    return (
     
        <div className="movies">
           
           <div className="movie">
           
      <div>
        
        <img
          width="300"
          height="500"
          src={image}
         alt="logo"
        />
       
      </div>
      <span className="rates"><Rate raiting={raiting} key={id}/></span>
      <Link to={`/movie/${id}`}><h3>{title}</h3></Link>
     
      
      
    </div>       
        </div>
          
    
    )
}
export default MovieCard;