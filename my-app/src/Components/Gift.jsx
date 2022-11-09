import React from "react";
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
function Gift() {
  return (
    <Popover>
      <PopoverTrigger>
        <Text _hover={{ textDecoration: "underline" }} cursor="context-menu">
          Gift
        </Text>
      </PopoverTrigger>
      <PopoverContent w="98%" p="10px">
        <PopoverArrow />
        <PopoverCloseButton />
        <HStack spacing={"25px"}>
          <Box w="60%">
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
                    Explore All Gifts
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Gift For Her
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Shop All Gifts
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Candle Gifts & Sets
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Holiday Decor , Ornaments, Gift Wrap & More
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Stocking Stuffers
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Giftable Sweaters
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Giftable Accessories: Jewelry, Bags, Scarves, & More{" "}
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Gifts For The Home
                  </Text>
                </Box>
                <Box>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Cozy Gifts: PJs, Slippers, Throws, Mugs & More
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Cold-Weather Gifts: Scarves, Hats, Activewear & More
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Personalized & Monogram Gifts
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Beauty Gifts and Sets
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Gifts By Recipient
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Bestselling Gifts
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Gift Bundles: Bundle & Save
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="context-menu"
                    mt="8px"
                  >
                    Gift Cards
                  </Text>
                </Box>
              </HStack>
            </PopoverBody>
          </Box>
          <Box>
            <PopoverHeader>
              <Heading size="md">Gifts By Price</Heading>
            </PopoverHeader>
            <PopoverBody>
              <Box>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  Gift Under $25
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  Gift Under $50
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  Gift Under $75
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  Gift Under $100
                </Text>
              </Box>
            </PopoverBody>
          </Box>
          <Box>
            <PopoverHeader>
              <Heading size="md">Gifts By Price</Heading>
            </PopoverHeader>
            <PopoverBody>
              <Box>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  Gift Under $25
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  Gift Under $50
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  Gift Under $75
                </Text>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="context-menu"
                  mt="12px"
                >
                  Gift Under $100
                </Text>
              </Box>
            </PopoverBody>
          </Box>
          <Image
            src="https://images.ctfassets.net/5de70he6op10/707skvaPUjWuminqERop6W/570d08ba0a78d5dfa20aa515a85d3e9d/Nov22_SiteContent_Home_StockingStuffersSupernav_2x.jpg?w=295&q=80&fm=webp"
            alt="gift"
          />
        </HStack>
      </PopoverContent>
    </Popover>
  );
}

export default Gift;
