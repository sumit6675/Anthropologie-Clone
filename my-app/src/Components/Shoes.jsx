import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverArrow,
    PopoverContent,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    Text,
    HStack,
    Box,
    Heading,
    Image,
  } from "@chakra-ui/react";
function Shoes() {
  return (
    <Popover>
    <PopoverTrigger>
      <Text _hover={{ textDecoration: "underline" }} cursor="context-menu">
        Shoes
      </Text>
    </PopoverTrigger>
    <PopoverContent w="98%" p="10px">
      <PopoverArrow />
      <PopoverCloseButton />
      <HStack justifyContent={"space-around"} spacing={"35px"}>
        <Box>
          <PopoverHeader>
            <Heading size={"md"}>Shop By Category</Heading>
          </PopoverHeader>
          <PopoverBody>
            <HStack spacing={"30px"}>
              <Box>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Shop All Dresses
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  News!
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  Top Rated Dresses
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  Occasion & Party Dresses
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Launge & Casual Dresses
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  Formal Dresses
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Max! Dresses
                </Text>
              </Box>
              <Box>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Mini & Tunic Dresses
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  Midi Dresses
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  Petie Dresses
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  Plus Dresses
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Wedding Guest Dresses
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  BHLDN Weddings
                </Text>
              </Box>
            </HStack>
          </PopoverBody>
        </Box>
        <Box>
          <PopoverHeader>
            <Heading size="md">Featured Shops</Heading>
          </PopoverHeader>
          <PopoverBody>
            <Box>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
               Velvet Dresses
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
               Trending: Tulie
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
                Little Black Dresses
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
               Little White Dresses
              </Text>
            </Box>
          </PopoverBody>
        </Box>
        <Box>
          <Image src="https://images.urbndata.com/is/image/Anthropologie/4130636080001_001_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720" h="300px" w="300px" alt="Dresses"/>
        </Box>
      </HStack>
    </PopoverContent>
  </Popover>
  )
}

export default Shoes