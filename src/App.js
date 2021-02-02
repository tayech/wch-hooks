import React,{useState} from 'react';
import Header from './Components/Header/Header'


import {data} from './Components/Data'
import Main from './Components/Main'
import {Route} from 'react-router-dom'
import './App.css';
import MoviesDatails from './Components/MoviesData/MoviesData'

function App() {
  const [movies, setMovies] = useState(data)
  const [myInput, setMyInput] = useState("")
  const [rate, setRate] = useState(0)
  const AddMovie=(x)=>{setMovies([...movies,x])}
  return (
    <div className="App">
    
   < Header setMyInput={setMyInput} rate={rate} setRate={setRate}/>
    <Route exact path="/" render={()=>(<Main movies={movies.filter((el)=>el.title.toUpperCase().includes(myInput.toUpperCase().trim())&&
      el.raiting>=rate)}
      AddMovie={AddMovie}/>)}/>
    <Route exact path="/movie/:id" render={(props)=>(<MoviesDatails movies={movies} {...props}/>)}/>
     
     
    </div>
  );
}

export default App;
