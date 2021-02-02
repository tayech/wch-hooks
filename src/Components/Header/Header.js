import React from 'react'

import './Header.css'
import Rate from '../Rate'
 const Header=({setMyInput,setRate,rate})=>{
  
    return (
        <div className="header">
         <input placeholder="enter your films" 
         className="input"
         onChange={(e)=>setMyInput(e.target.value)}/> 
         <div className="rate"><Rate raiting={rate} setRate={setRate}
        
         /></div> 
        
        </div>
    )
}
export default Header;