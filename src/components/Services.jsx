import { Box, Flex, Text, Container, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export default function About() {
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
      <Container direction="column" align="center" p={20} position={"relative"}  textAlign="center" color="black" fontFamily="Oswald" fontWeight={400}>
        <Text fontSize="3xl" fontWeight="bold" p={5}>
          My Skills
        </Text>
        <Text fontSize="lg" mb={8} textAlign={"justify"}>
          Proficient in MERN stack development with expertise in MongoDB,
          Express.js, React, and Node.js. Skilled in creating responsive web
          designs using HTML, CSS, and JavaScript. Experienced in software
          testing concepts, SDLC models, and database management with SQL
          and MongoDB. Dedicated to writing clean, efficient, and
          maintainable code.
        </Text>

      {/* Skill Icons Grid */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={10}
        maxW="800px"
        mx="auto"       // 🔥 THIS CENTERS THE GRID
        justifyItems="center"
      >
        {images.map((url, index) => (
          <Box key={index} textAlign="center">
            <Image
              src={url.link}
              borderRadius="lg"
              objectFit="cover"
              alt={url.caption}
              mx="auto"
            />
            <Text mt={2} fontFamily="Doto" color="black" fontSize={25}>
              {url.caption}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
         </Container>

  );
}
