import { Box, Flex, Text, Container, Image, SimpleGrid } from "@chakra-ui/react";
import * as motion from "motion/react-client"
import React from "react";

export default function Services() {
  const images = [
    { link: "https://img.icons8.com/?size=100&id=23027&format=png&color=000000", caption: "HTML" },
    { link: "https://img.icons8.com/?size=100&id=38273&format=png&color=000000", caption: "CSS" },
    { link: "https://img.icons8.com/?size=100&id=39853&format=png&color=000000", caption: "Javascript" },
    { link: "https://img.icons8.com/?size=100&id=0Da6k7SMq0hs&format=png&color=000000", caption: "React" },
    { link: "https://img.icons8.com/?size=100&id=WC9GOvjtKVuH&format=png&color=000000", caption: "MongoDB" },
    { link: "https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=000000", caption: "NodeJS" },
    { link: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000", caption: "ExpressJS" }
  ];

  return (
    <Container maxW="container.xl" p={{ base: 10, md: 20 }} position={"relative"} color="black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Text fontSize="3xl" fontWeight="bold" p={5} fontFamily={"Doto"} textAlign="center" className="gradient-text">
          My Skills
        </Text>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Text fontSize="lg" mb={8} textAlign={"center"} fontFamily={"Oswald"}>
          Proficient in MERN stack development with expertise in MongoDB,
          Express.js, React, and Node.js. Skilled in creating responsive web
          designs using HTML, CSS, and JavaScript. Experienced in software
          testing concepts, SDLC models, and database management with SQL
          and MongoDB. Dedicated to writing clean, efficient, and
          maintainable code.
        </Text>
      </motion.div>

      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4 }}
        spacing={8}
        justifyItems="center"
      >
        {images.map((url, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.15, 
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            <Box 
              textAlign="center" 
              p={4}
              borderRadius="xl"
              bg="white"
              boxShadow="md"
              _hover={{
                boxShadow: "xl",
              }}
              transition="all 0.3s ease"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                <Image
                  src={url.link}
                  borderRadius="lg"
                  objectFit="contain"
                  alt={url.caption}
                  mx="auto"
                  h="70px"
                  w="70px"
                />
              </motion.div>
              <Text mt={3} fontFamily="Doto" color="black" fontSize="lg" fontWeight="medium">
                {url.caption}
              </Text>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>

      {/* Animated progress bars for skill levels */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ marginTop: "50px" }}
      >
        <Text fontSize="xl" fontWeight="bold" mb={5} fontFamily={"Doto"} textAlign="center">
          Skill Proficiency
        </Text>
        
        {[
          { skill: "React", level: 85 },
          { skill: "JavaScript", level: 90 },
          { skill: "Node.js", level: 80 },
          { skill: "MongoDB", level: 75 },
          { skill: "HTML/CSS", level: 95 }
        ].map((item, index) => (
          <Box key={index} mb={4}>
            <Flex justify="space-between" mb={2}>
              <Text fontFamily="Oswald">{item.skill}</Text>
              <Text fontFamily="Oswald">{item.level}%</Text>
            </Flex>
            <Box bg="gray.200" borderRadius="full" h="10px" overflow="hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "full"
                }}
              />
            </Box>
          </Box>
        ))}
      </motion.div>
    </Container>
  );
}