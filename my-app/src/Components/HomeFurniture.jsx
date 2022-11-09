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
function HomeFurniture() {
  return (
    <Popover>
      <PopoverTrigger>
        <Text _hover={{ textDecoration: "underline" }} cursor="context-menu">
        Home & Furniture
        </Text>
      </PopoverTrigger>
      <PopoverContent w="98%" p="10px">
        <PopoverArrow />
        <PopoverCloseButton />
        <HStack justifyContent={"space-between"} spacing={"35px"}>
          <Box>
            <PopoverHeader>
              <Heading size={"md"}>Shop By Category</Heading>
            </PopoverHeader>
            <PopoverBody>
                <Box>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Accessories
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Beauty & Welliness
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Clothing
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                   Dresses
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                   Home & Furniture
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                   Jewelry
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                   Petites
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                   Plus
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                   Shoes
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                   BHLDN Weddings
                  </Text>
                </Box>
            </PopoverBody>
          </Box>
          <Box>
            <PopoverHeader>
              <Heading size="md">Featured</Heading>
            </PopoverHeader>
            <PopoverBody>
              <Box w="160%">
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  The Holiday 2022 Collection
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                 New Today: Clothing & Accessories
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  Trending: Metallic & Shine
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  The Velvet Shop
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  Matilda Goad & Co.
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  Set The Scene: Thanksgiving
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                 House Of Hackney
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  The Cozy Adventure Shop
                </Text>
              </Box>
            </PopoverBody>
          </Box>
          <Image
            src="https://images.ctfassets.net/5de70he6op10/5lNg9HYSe5sOBuu5EK6eOY/698f82506c94a5e00104a16a5a27afa6/110722_HighStyle_Supernav_NEW.jpg?w=295&q=80&fm=webp"
            alt="News"
          />
        </HStack>
      </PopoverContent>
    </Popover>
  )
}

export default HomeFurniture