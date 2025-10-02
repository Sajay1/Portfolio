import { Flex, Box, Image, Text, Button } from "@chakra-ui/react";
import * as motion from "motion/react-client"
import React, { useState } from "react";
import me from '../assets/me.jpg';
import { ReactTyped } from "react-typed";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Sajay Suresh K - Resume.pdf'; 
    link.download = 'Sajay Suresh K - Resume';
    link.click();
  };

  return (
    <>
      <Box 
        color={"black"} 
        p={{ base: 10, md: 20 }} 
        border={"none"} 
        position={"relative"} 
        href="/"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        justify="space-between"
        minH="100vh"
      >
         <Flex gap="2" justify={"flex-end"}>


        <Box px={{ base: 2, md: 5 }} textAlign={{ base: "center", md: "left" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text fontSize={{ base: "lg", md: "xl" }} fontFamily={"Doto"} >
              I'm
            </Text>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Text 
              fontSize={{ base: "3xl", md: "5xl" }} 
              p={{ base: 5, md: 10 }} 
              fontFamily={"Doto"}  
              fontWeight={648}
              className="gradient-text"
            >
              Sajay Suresh K
            </Text>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Text fontSize={{ base: "xl", md: "2xl" }} p={4} fontFamily={"Doto"} fontWeight={648}>
              A Passionate &nbsp;
              <ReactTyped  
                strings={["FRONT-END DEVELOPER", "WEB DEVELOPER", "MERN DEVELOPER"]}
                typeSpeed={40}
                backSpeed={30}
                loop
              />
            </Text>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Text fontSize={{ base: "md", md: "lg" }} textAlign={{ base: "justify", md: "justify" }} fontFamily={"Oswald"} fontWeight={648}>
              A dedicated MERN stack developer fresher with a strong foundation
              in MongoDB, Express.js, React, and Node.js. Equipped with web
              development skills, problem-solving abilities, and a passion for
              creating dynamic and user-friendly applications.
            </Text>
          </motion.div>
          <Box textAlign={{ base: "center", md: "left" }} mt={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="md" 
                colorScheme="teal" 
                variant="outline"
                color={"teal"}
                onClick={handleDownload}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                _hover={{
                  color: "white",
                  bg: "teal.500",
                  transform: "translateY(-3px)",
                  boxShadow: "lg"
                }}
                transition="all 0.3s ease"
              >
                {isHovering ? 'DOWNLOAD RESUME' : 'RESUME'}
              </Button>
            </motion.div>
          </Box>
          
        </Box>

         <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ 
            rotate: 3,
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          className="float"
        >
         
          <Image 
              src={me} 
              h={{ base: 23, md: 23 }}  
              w={{ base: 23, md: 23 }}  
              boxSize={{ base: "250px", md: "350px" }}
              borderRadius="full"
              
              alt="Sajay"
              boxShadow="0 20px 40px rgba(0, 0, 0, 0.2)"
              border="4px solid"
              borderColor="teal.200"
            />
            
        </motion.div>

        </Flex>
      </Box>
    </>
  );
}