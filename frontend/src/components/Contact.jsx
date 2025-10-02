import { Box, Flex, Text,Textarea, Container ,Link,Input,Button ,Image, Center } from "@chakra-ui/react";
import { wrap } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <>
          <Box direction="column" align="center" p={20} position={"relative"}  textAlign="center" color="black" fontFamily="Oswald" fontWeight={400}>
            <Text fontSize="3xl" textAlign={"center"} mb={10} fontFamily={"Doto"} fontWeight={700}>
          GET IN TOUCH
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
            <Flex justifyContent={"center"} >
                <Text fontSize="2xl" fontFamily={"Doto"} fontWeight={900} >
              Send a Message
            </Text>
            </Flex>
            
            <Flex direction={"column"} >

            <Flex gap={9} direction={"row"} justify={"center"}>
              <Box>
              <Input placeholder="First Name"  variant="flushed"/>
            </Box>
            <Box>
              <Input placeholder="Last Name" variant="flushed"/>
            </Box>
            </Flex>

            <Flex gap={9} direction={"row"} justify={"center"}>
               <Box>
              <Input placeholder="Enter Phone"variant="flushed"/>
            </Box>
            
            <Box>
              <Input placeholder="Email" variant="flushed"/>
            </Box>
            </Flex>

            <Flex gap={9} direction={"column"} justify={"center"} mt={6} px={9} >
              <Box>
                <Textarea placeholder="Enter message" ></Textarea>
              </Box>
            </Flex>

            <Button pt={4} mb={2} >Submit</Button>
           
            </Flex>
            
          </Box>

          

          
        </Flex>
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
            <Flex justifyContent={"center"} >
                <Text fontSize="2xl" fontFamily={"Doto"} fontWeight={900} >
             CONTACT INFO
            </Text>
            </Flex>
            
            <Flex justify={"center"} wrap={wrap} p={4}>
              <Box>
              <Image width={10} src="data:image/png;base64,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" />
               </Box>
            <Box pl={10}>
              <Text fontSize="2xl" fontFamily={"Doto"} fontWeight={900} >
              +91 8606551837
            </Text>
            </Box>
            </Flex>
            

            <Flex justify={"center"} wrap={wrap} p={4}>
              <Box>
              <Image width={10} src="data:image/png;base64,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" />  </Box>
            <Box pl={5}>
              <Text fontSize="xl" fontFamily={"Doto"} fontWeight={900} >
              sajaysuresh307@gmail.com
            </Text>
            </Box>
            </Flex>
            

          </Box>

          

          
        </Flex>
    </Flex>


     </Box>
    </>
  );
}
