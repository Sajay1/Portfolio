import { React } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/PortFolio'
import { Routes,Route } from 'react-router-dom'
import { Stack,Link } from '@chakra-ui/react'
import About from './components/About'
import Services from './components/Services'

function App() {

  return (
    <>
     <Navbar fontFamily={"Doto"}  fontWeight={648}/>
      <Stack py={3} bgColor={'white'} >
      
      <Link href='/'>
      <Home />
      </Link>

      <Link href='/about'>
      <About />
      </Link>
      
      <Link href='/services'>
      <Services />
      </Link>
     </Stack>
    </>
  )
}

export default App
