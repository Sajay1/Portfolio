import { React } from 'react'
import { Flex, Image,Box } from '@chakra-ui/react';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/PortFolio'
import { useState,useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import img from "./assets/logo.png"
import * as motion from "motion/react-client"
import { Stack,Link } from '@chakra-ui/react'
import About from './components/About'
import Services from './components/Services'

function App() {

  const [loading, setLoading] = useState(true);
    
      // Simulate loading effect (2 seconds)
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) {
        return (
          <Flex
            minH="100vh"
            align="center"
            justify="center"
            bg="white"
            direction="column"
            
          >
            {/* Loader Image */}
            <motion.ul animate={{ scale: 2 ,opacity: 2}}
            transition={{ duration: 1 }}
            >
                 <Image src={img} boxSize="350px" alt="Loading..."/>
            </motion.ul>
           
          </Flex>
        );
      }

  return (
    <>
     <Navbar fontFamily={"Doto"}  fontWeight={648}/>
      <Stack bgColor={'white'} >
      
      <Link href='/'>
      <Home/>
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
