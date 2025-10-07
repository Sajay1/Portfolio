import { React } from 'react'
import { Flex, Image, Box } from '@chakra-ui/react';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/PortFolio'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import img from "./assets/logo.png"
import * as motion from "motion/react-client"
import { Stack, Link } from '@chakra-ui/react'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // Check if current route is home
  const isHomePage = location.pathname === '/';
    
  // Simulate loading effect (2 seconds) only for home page
  useEffect(() => {
    if (isHomePage) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // If not home page, set loading to false immediately
      setLoading(false);
    }
  }, [isHomePage]);
    
  if (loading && isHomePage) {
    return (
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg="white"
        direction="column"
      >
        {/* Enhanced Loader with multiple animations */}
        <motion.div
          initial={{ scale: 0.5, filter: "blur(20px)", opacity: 0, rotate: -10 }}
          animate={{ 
            scale: 1, 
            filter: "blur(0px)", 
            opacity: 1, 
            rotate: 0 
          }}
          transition={{ 
            duration: 1.2,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.3 }
          }}
        >
          <Image src={img} boxSize="350px" alt="Loading..."/>
        </motion.div>
        
        {/* Loading text with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.5
          }}
          style={{ marginTop: '30px' }}
        >
          <Box 
            fontSize="2xl" 
            fontWeight="bold" 
            color="gray.600"
            fontFamily="Doto"
          >
            Loading
            {/* Animated dots */}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ...
            </motion.span>
          </Box>
        </motion.div>
        
        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "300px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            height: "6px",
            backgroundColor: "#764ba2",
            borderRadius: "10px",
            marginTop: "40px"
          }}
        />
      </Flex>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar fontFamily={"Doto"} fontWeight={648}/>
      <Box bgColor={'white'}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Box>
    </motion.div>
  )
}

export default App