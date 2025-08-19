import { Flex,Box ,Image,Text,Circle,Container,Link} from "@chakra-ui/react";
import React from "react";
import me from '../assets/me.jpg';
import { ReactTyped } from "react-typed";



export default function Home(){
    return(
        <>

        <Link href="/">
        <Container columns={{base:"xl"}} color={"black"}>
                <Flex columns={{base:"xl" }}>
                    <Box p={50} >
                    <Text textStyle="lg" textAlign={"center"}  >I'm</Text>
                    <Text textStyle="5xl" textAlign={"center"} p={10} fontFamily={"Doto"}  fontWeight={648}  >Sajay Suresh K</Text>
                        <Text textStyle="2xl"  textAlign={"center"} p={4} fontFamily={"Doto"}  fontWeight={648} >A Passionate &nbsp;
                                <ReactTyped  strings={["FRONT-END DEVELOPER","WEB DEVELOPER","MERN DEVELOPER"]}
                          typeSpeed={40}
                          backSpeed={30}
                          loop
                          ></ReactTyped>
                          </Text>
                             <Text textStyle="lg" textAlign={"center"} fontFamily={"Oswald"}  fontWeight={648} >
              A dedicated MERN stack developer fresher with a strong foundation
              in MongoDB, Express.js, React, and Node.js. Equipped with web
              development skills, problem-solving abilities, and a passion for
              creating dynamic and user-friendly applications.
            </Text>
            </Box>

            <Box flexBasis="50">
            <Image src={me} h={350}  w={"970px"}  boxSize="350px"
    borderRadius="full"
    fit="cover"
    alt="Naruto Uzumaki" />
            </Box>
            </Flex>
            </Container>
            </Link>
        </>
    )
}