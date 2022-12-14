import { Box, Button, Flex, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Carousels1 from "./Carousels1";
import Carousels2 from "./Carousels2";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Anthropologie() {
  return (
    <>
      <Box w="95%" margin={"auto"}>
        <Navbar />
        <HStack w="95%" margin={"auto"} mt="50px" spacing="25px">
          <Link to="/product" w="20%">
            <Image
              src="https://images.ctfassets.net/5de70he6op10/66gBHQY9rlKtf5IItLdMCa/eb48274717871eb64ba75900e042218f/LS_M0_Banner_a.jpg?w=630&q=80&fm=webp"
              alt="img1"
            />
          </Link>
          <Link to="/product" w="20%">
            <Image
              src="https://images.ctfassets.net/5de70he6op10/7FtJ5t3fiV8RM8Q80ufmqS/4b8d59935ecd871b8f0b1055665bbe09/LS_M0_Banner_b.jpg?w=630&q=80&fm=webp"
              alt="img1"
            />
          </Link>
          <Link to="/product" w="20%">
            <Image
              src="https://images.ctfassets.net/5de70he6op10/6Rg6bbVw5EcY8ZFGylD3Lt/52e96081fac4772cbd0e5aabda58219a/LS_M0_Banner_c.jpg?w=630&q=80&fm=webp"
              alt="img1"
            />
          </Link>
          <Link to="/product" w="20%">
            <Image
              src="https://images.ctfassets.net/5de70he6op10/2jP2GsJVfSqC66yrxJJPOX/a4b3ecfc7c2a6de75aa10b764c9cfe9f/LS_M0_Banner_d.jpg?w=630&q=80&fm=webp"
              alt="img1"
            />
          </Link>
        </HStack>
        <HStack w="98%" ml="80px" mt="50px">
          <Image
            src="https://images.ctfassets.net/5de70he6op10/iMM14RuhLCVUGYVmrKvc9/b97a6a1d371ca72bbc1ae9aaf4a11f26/LS_M1a.jpg?w=1302&q=80&fm=webp"
            alt="img3"
            w="45%"
          />
          <Image
            src="https://images.ctfassets.net/5de70he6op10/6pgHrENVmjeLfmWwwGZuiG/7087546a3b3529f4de0de0ccedca384e/LS_M1b.jpg?w=1302&q=80&fm=webp"
            alt="img3"
            w="45%"
          />
        </HStack>
        <Flex w="70%" m="auto" gap="650px" mt="-100px" mb="100px">
          <Link to="/product">
            {" "}
            <Button>Shop Dresses</Button>
          </Link>
          <Link to="/product">
            <Button>Shop Skirt</Button>
          </Link>
        </Flex>
        <HStack w="98%" mt="30px" ml="80px">
          <Image
            src="https://images.ctfassets.net/5de70he6op10/3w8rGkLqypJyMI94W5jAz6/b1a47476e9fa52841b06bcbf50e8c337/LS_M2a.jpg?w=856&q=80&fm=webp"
            alt="img4"
            w="30%"
          />
          <Image
            src="https://images.ctfassets.net/5de70he6op10/4dc0UZzh9jWMuJPdVGcr2v/8a7ace4023132337f5e9a81d4ac819f4/LS_M2b.jpg?w=856&q=80&fm=webp"
            alt="img4"
            w="30%"
          />
          <Image
            src="https://images.ctfassets.net/5de70he6op10/28WqNdcNbssmLjzWncssjE/a9ef1a745783404fb8f054796735b3b1/LS_M2c.jpg?w=856&q=80&fm=webp"
            alt="img4"
            w="30%"
          />
        </HStack>
        <Flex w="75%" m="auto" gap="350px" mt="-100px" mb="100px">
          <Link to="/product" w="18rem">
            {" "}
            <Button>Shop Sweater</Button>
          </Link>
          <Link to="/product" w="18rem">
            {" "}
            <Button>Shop Winterware</Button>
          </Link>
          <Link to="/product" w="18rem">
            {" "}
            <Button>Shop Skirt</Button>
          </Link>
        </Flex>
        <Carousels2 />
        <Flex w="70%" m="auto" gap="650px" mt="-100px" mb="100px">
          <Link to="/product">
            <Button>Shop Furniture</Button>
          </Link>
          <Link to="/product">
            <Button>Shop Tables</Button>
          </Link>
        </Flex>
        <Image
          src="https://images.ctfassets.net/5de70he6op10/sElVOkh1LlYRV8lFchscj/3fa66885dac24294a26ad182591b8639/ALiving_HPG_LS_01-1.jpg?w=2640&q=80&fm=webp"
          alt="img5"
          w="90%"
          mt="30px"
          ml="80px"
        />
        <Link to="/product">
          <Button w="12rem" ml="650px" mt="-120px">
            Shop Winterware
          </Button>
        </Link>
        <Image
          src="https://images.ctfassets.net/5de70he6op10/6YcDf5MI12J4gw9cOaz9WP/70f858a9574c2e0ff43b2b7bdc6e61af/LS_M4.jpg?w=2641&q=80&fm=webp"
          alt="img5"
          w="90%"
          mt="30px"
          ml="80px"
        />
        <Link to="/product">
          {" "}
          <Button w="12rem" ml="650px" mt="-120px">
            Shop Dresses
          </Button>
        </Link>
        <HStack w="98%" mt="30px" ml="80px">
          <Image
            src="https://images.ctfassets.net/5de70he6op10/7fzJY7mnX3XvCv1RNf6mTp/79d5f396c261126621d9a105c88faaf3/RR_Kitchen_Dining.jpg?w=856&q=80&fm=webp"
            alt="img4"
            w="30%"
          />
          <Image
            src="https://images.ctfassets.net/5de70he6op10/6qpsukHAAtvED0Tc12y84m/645098d9a2f3d0da07fc3ad86e11a228/RR_Bedding.jpg?w=856&q=80&fm=webp"
            alt="img4"
            w="30%"
          />
          <Image
            src="https://images.ctfassets.net/5de70he6op10/7xfJSO2og2DDZa4IpAilFz/882783ed4607343a932d4d975fe22be6/RR_Furniture.jpg?w=856&q=80&fm=webp"
            alt="img4"
            w="30%"
          />
        </HStack>
        <Flex w="75%" m="auto" gap="350px" mt="-100px" mb="100px">
          <Link to="/product" w="18rem">
            {" "}
            <Button>Shop Cutlary</Button>
          </Link>
          <Link to="/product" w="18rem">
            {" "}
            <Button>Shop Pillow</Button>
          </Link>
          <Link to="/product" w="18rem">
            {" "}
            <Button>Shop Tables</Button>
          </Link>
        </Flex>
        <Carousels1 />
        <Link to="/product">
          {" "}
          <Button w="12rem" ml="620px" mt="-230px">
            Shop Winterware
          </Button>
        </Link>
      </Box>
      <Footer />
    </>
  );
}

export default Anthropologie;
