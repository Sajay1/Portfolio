import { React } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/PortFolio'
import { Routes,Route } from 'react-router-dom'
import { Stack,Image } from '@chakra-ui/react'
import About from './components/About'

function App() {

  return (
    <>
     <Navbar/>
      <Stack py={3} bgColor={'white'} >
      <Home />
      <About />
     </Stack>
    </>
  )
}

export default App
