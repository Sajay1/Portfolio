import { HStack, Link, Box, Image, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import img from "../assets/logo.png";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contacts", href: "/contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      bg="white"
      px={{ base: 4, md: 7 }}
      py={3}
      boxShadow={isScrolled ? "sm" : "none"}
      position="sticky"
      top={0}
      zIndex={1000}
      fontFamily="Doto"
      fontWeight={600}
      transition="box-shadow 0.3s ease-in-out"
    >
      <Flex justify="space-between" align="center" mx="auto">
        <Image
          src={img}
          h="40px"
          _hover={{
            transform: "scale(1.2)",
            transition: "all 0.4s ease-in-out",
          }}
        />

        <HStack as="nav" spacing={{ base: 4, md: 8 }}>
          {/* Responsive spacing */}
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              px={2}
              color="blackAlpha.700"
              fontWeight="medium"
              position="relative"
              _hover={{
                textDecoration: "none",
                color: "blackAlpha.900",
                _after: {
                  transform: "scaleX(1)",
                  visibility: "visible",
                },
              }}
              _after={{
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: "-5px",
                left: 0,
                bg: "blackAlpha.800",
                transform: "scaleX(0)",
                transition: "all 0.3s ease-in-out",
                visibility: "hidden",
              }}
            >
              {label}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
