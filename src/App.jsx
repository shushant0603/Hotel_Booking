import React from 'react'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Video from './components/Video'

function App() {


  return (
   <>
    <Navbar/>
    <Homepage/>
    <Video/>
   </>
  )
}

export default App
