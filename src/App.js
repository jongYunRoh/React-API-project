import { useState, useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home';
import './App.css'

function App() {
  const[data, setData] = useState([]);
  
  const API_URL =`https://restcountries.com/v3.1/all`;

  useEffect(()=>{
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App