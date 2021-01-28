import React,{useState} from 'react';
import Header from './Components/Header/Header'

import {data} from './Components/Data'
import Main from './Components/Main'

import './App.css';
function App() {
  const [movies, setMovies] = useState(data)
  const [myInput, setMyInput] = useState("")
  const [rate, setRate] = useState(0)
  const AddMovie=(x)=>{setMovies([...movies,x])}
  return (
    <div className="App">
      <Header setMyInput={setMyInput} rate={rate} setRate={setRate}/>
    <Main movies={movies.filter((el)=>el.title.toUpperCase().includes(myInput.toUpperCase().trim())&&
      el.raiting>=rate)}
      AddMovie={AddMovie}/>
      
    </div>
  );
}

export default App;
