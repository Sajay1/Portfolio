import { Flex,Box ,Image,Text,Button,Link,DownloadTrigger,FormatByte} from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import me from '../assets/me.jpg';

import { ReactTyped } from "react-typed";



export default function Home(){

    const [isHovering, setIsHovering] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Sajay Suresh K - Resume.pdf'; 
        link.download='Sajay Suresh K - Resume'
        link.click();
    };
     
    return(
        <>
                <Flex color={"black"} p={20} border={"none"} position={"relative"} >
                    <Box px={5}>
                    <Text textStyle="xl" textAlign={"center"}  fontFamily={"Doto"} >I'm</Text>
                    <Text textStyle="5xl" textAlign={"center"} p={10} fontFamily={"Doto"}  fontWeight={648}  >Sajay Suresh K</Text>
                        <Text textStyle="2xl"  textAlign={"center"} p={4} fontFamily={"Doto"}  fontWeight={648} >A Passionate &nbsp;
                                <ReactTyped  strings={["FRONT-END DEVELOPER","WEB DEVELOPER","MERN DEVELOPER"]}
                          typeSpeed={40}
                          backSpeed={30}
                          loop
                          ></ReactTyped>
                          </Text>
                             <Text textStyle="lg" textAlign={"justify"} fontFamily={"Oswald"}  fontWeight={648} >
              A dedicated MERN stack developer fresher with a strong foundation
              in MongoDB, Express.js, React, and Node.js. Equipped with web
              development skills, problem-solving abilities, and a passion for
              creating dynamic and user-friendly applications.
            </Text>
            
            <Box textAlign="center" mt={6}>

                    <Button 
                            size="md" 
                            colorScheme="teal" 
                            variant="outline"
                            color={"teal"}
                            onClick={handleDownload}
  onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    _hover={{
        color:"white",
        transition:"1s"
    }}
                        >
                            {isHovering ? 'DOWNLOAD RESUME' : 'RESUME'}
                        </Button>
                        
                    </Box>
            </Box>

            <Box flexBasis="50">
            <Image src={me} h={350}  w={"970px"}  boxSize="350px"
    borderRadius="full"
    fit="cover"
    alt="Sajay" />
            </Box>


            </Flex>
            
        </>
    )
}