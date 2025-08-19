import { Box,Flex,Link,Text,Container } from "@chakra-ui/react"
import React from "react"

export default function About(){
    return(
         <Link href="/about">
           <Flex > 
            <Box >
                <Container color={"black"} textAlign={"justify"} fontFamily={"Oswald"}  fontWeight={400} width={"full"}> 
                     <Text textStyle="3xl" textAlign={"center"}>About Me</Text>
                     
                <Text textStyle="2xl" textAlign={"center"}  paddingTop={9} paddingBottom={5}>Frontend Developer</Text>
                  
                <Text textStyle="lg">Skilled in developing responsive, interactive web applications
                  using React.js, HTML5, CSS3, and modern JavaScript (ES6+).
                  Passionate about building visually appealing,
                  high-performance web interfaces.</Text>

                  <Text textStyle="2xl" textAlign={"center"}  paddingTop={9} paddingBottom={5}>Backend Developer</Text>
                  <Text textStyle="lg" > Proficient in building scalable and high-performance
                  server-side applications using Node.js and Express.js.
                  Experienced in designing and implementing RESTful APIs for
                  efficient data handling and seamless client-server
                  communication. Skilled in working with databases like MongoDB,
                  with a strong focus on data modeling, security, and
                  performance optimization.</Text>
                </Container>
            </Box>
           </Flex>
           </Link>
    )
}