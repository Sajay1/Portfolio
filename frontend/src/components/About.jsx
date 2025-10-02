import { Box, Flex, Text, Container } from "@chakra-ui/react";
import * as motion from "motion/react-client"
import React from "react";

export default function About() {
  return (
    <>
      <Box maxW="container.xl" p={{ base: 10, md: 20 }} position={"relative"}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Text fontSize="3xl" textAlign={"center"} mb={10} fontFamily={"Doto"} fontWeight={800}>
            About Me
          </Text>
        </motion.div>
        
        <Flex justify="center" position={"relative"} color={"black"} fontFamily={"Oswald"} fontWeight={400} width={"full"}>
          <Flex justify="center" wrap="wrap" direction={{ base: "column", md: "row" }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              
              
              <Box
                border={"md"}
                boxShadow={"lg"}
                p={6}
                m={5}
                w={{ base: "100%", md: "md" }}
                textAlign="center"
                borderRadius="xl"
                bg="white"
                _hover={{
                  boxShadow: "xl",
                }}
                transition="all 0.3s ease"
              >
                <Text fontSize="2xl" mb={4} fontFamily={"Doto"} fontWeight={800} className="gradient-text">
                  Frontend Developer
                </Text>
                <Text fontSize="lg" textAlign={"justify"}>
                  Skilled in developing responsive, interactive web applications
                  using React.js, HTML5, CSS3, and modern JavaScript (ES6+).
                  Passionate about building visually appealing, high-performance web
                  interfaces.
                </Text>
              </Box>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >

             


              <Box
                border={"md"}
                boxShadow={"lg"}
                p={6}
                m={5}
                w={{ base: "100%", md: "md" }}
                textAlign="center"
                borderRadius="xl"
                bg="white"
                _hover={{
                  boxShadow: "xl",
                }}
                transition="all 0.3s ease"
              >
                <Text fontSize="2xl" mb={4} fontFamily={"Doto"} fontWeight={800} className="gradient-text">
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
            </motion.div>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}