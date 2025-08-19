import { Box,Flex,Link,Text,Container,Image, Center } from "@chakra-ui/react"
import React from "react"

export default function About(){
    return(
         <Link href="/services">
           <Flex > 
            <Box >
                <Container color={"black"} textAlign={"justify"} fontFamily={"Oswald"}  fontWeight={400}> 
                     <Text textStyle="3xl" textAlign={"center"}>My Skills</Text>
                     
                  
                <Text textStyle="lg">   Proficient in MERN stack development with expertise in MongoDB,
              Express.js, React, and Node.js. Skilled in creating responsive web
              designs using HTML, CSS, and JavaScript. Experienced in software
              testing concepts, SDLC models, and database management with SQL
              and MongoDB. Dedicated to writing clean, efficient, and
              maintainable code.</Text>
                </Container>
                <Container color={"black"} textAlign={"justify"} fontFamily={"Doto"}  fontWeight={800}
                textStyle="3xl" justify="center">
                  <Flex gap={20} wrap="wrap" textAlign={"justify"} direction={"row"} justify="center"  maxW={800} p={14}>
                    <Box textAlign={"center"} order="1">
                      <Image src={'https://img.icons8.com/?size=100&id=23027&format=png&color=000000'} /><Text>HTML</Text>
                    </Box>
                    <Box textAlign={"center"} order="1">
                  <Image src="https://img.icons8.com/?size=100&id=38273&format=png&color=000000" /><Text>CSS</Text>
                    </Box>
                    <Box textAlign={"center"} order="1">
                  <Image src="https://img.icons8.com/?size=100&id=39853&format=png&color=000000" /><Text>Javascript</Text>
                    </Box>
                    <Box textAlign={"center"} order="1">
                  <Image src="https://img.icons8.com/?size=100&id=0Da6k7SMq0hs&format=png&color=000000" /><Text>React Js</Text>
                    </Box>
                    <Box textAlign={"center"} order="1">
                  <Image src="https://img.icons8.com/?size=100&id=WC9GOvjtKVuH&format=png&color=000000" /><Text>MongoDB</Text>
                    </Box>
                    <Box textAlign={"center"} order="1">
                  <Image src="https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=000000" /><Text>Node Js</Text>
                    </Box>
                    <Box textAlign={"center"} order="1">
                  <Image src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" /><Text>Express Js</Text>
                    </Box>
                  </Flex>
                </Container>
            </Box>
           </Flex>
           </Link>
    )
}