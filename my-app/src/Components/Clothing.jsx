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
function Clothing() {
  return (
    <Popover>
    <PopoverTrigger>
      <Text _hover={{ textDecoration: "underline" }} cursor="context-menu">
        Clothings
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
            <HStack spacing={"30px"}>
              <Box>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  Shop All Clothing
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  New!
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  Top Rated
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Activeware
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Blazers
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
                  Getaway and Resort Wear
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Intimates and Lingerie
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Jackets and Coats
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Jeans
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Jumpsuits
                </Text>
              </Box>
              <Box>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Kimonos & Kaftans
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                 Loungeware
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  Pants
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
                 Shorts
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                  Skirts
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                Sleepwear & Robes
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                Sweaters
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                Swimwear
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="8px"
                >
                Tops & Tees
                </Text>
              </Box>
            </HStack>
          </PopoverBody>
        </Box>
        <Box>
          <PopoverHeader>
            <Heading size="md">Featured</Heading>
          </PopoverHeader>
          <PopoverBody>
            <Box>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
               The Holiday Party Shop
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
               Trending: Faux Leather
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
               Trending: Corduroy
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
        <Box>
          <PopoverHeader>
            <Heading size="md">Explore Sweaters</Heading>
          </PopoverHeader>
          <PopoverBody>
            <Box>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
                Pullover Sweaters
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
                Cardigans
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
                Statement Sweaters
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
               Cashmere Sweaters
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
              Turtleneck Sweaters
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
              Sweaters Under $100
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
               Petite Sweaters
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="context-menu"
                mt="12px"
              >
               Plus Sweaters
              </Text>
            </Box>
          </PopoverBody>
        </Box>
        <Image
          src="https://images.urbndata.com/is/image/Anthropologie/4113640120021_025_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720"
          w="350px"
          h="450px"
          alt="gift"
        />
      </HStack>
    </PopoverContent>
  </Popover>
  )
}

export default Clothing