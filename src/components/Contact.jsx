import { Box, Flex, Text, Container ,Link} from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <>
          <Container direction="column" align="center" p={20} position={"relative"}  textAlign="center" color="black" fontFamily="Oswald" fontWeight={400}>
            <Text fontSize="3xl" textAlign={"center"} mb={10}>
          About Me
        </Text>
    <Flex justify="center" position={"relative"}
    color={"black"}
        fontFamily={"Oswald"}
        fontWeight={400}
        width={"full"}
        textAlign="center">
        <Flex justify="center" wrap="wrap">
          <Box
            border={"md"}
            boxShadow={"lg"}
            p={6}
            m={5}
            w={{ base: "100%", md: "md" }}
            textAlign="center"
            order={1}
          >
            <Text fontSize="2xl" mb={4}>
              Frontend Developer
            </Text>
            <Text fontSize="lg" textAlign={"justify"}>
              Skilled in developing responsive, interactive web applications
              using React.js, HTML5, CSS3, and modern JavaScript (ES6+).
              Passionate about building visually appealing, high-performance web
              interfaces.
            </Text>
          </Box>

          <Box
            border={"md"}
            boxShadow={"lg"}
            p={6}
            m={5}
            w={{ base: "100%", md: "md" }}
            textAlign="center"
            order={1}
          >
            <Text fontSize="2xl" mb={4}>
              Backend Developer
            </Text>
            <Text fontSize="lg" textAlign={"justify"}>
              Proficient in building scalable and high-performance server-side
              applications using Node.js and Express.js. Experienced in
              designing and implementing RESTful APIs for efficient data
              handling and seamless client-server communication. Skilled in
              working with databases like MongoDB, with a strong focus on data
              modeling, security, and performance optimization.
            </Text>
          </Box>
        </Flex>
    </Flex>
            </Container>
    </>
  );
}
