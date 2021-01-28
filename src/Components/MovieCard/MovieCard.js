import React from 'react'
import './MovieCard.css'
import Rate from '../Rate'
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
      <h2>{title}</h2>
      <p>({date})</p>
      
      <p>{description}</p>
    </div>
        </div>
           
    
    )
}
export default MovieCard;