import React from "react";
import Carousels1 from "./Carousels1";
import Carousels2 from "./Carousels2";
import { Box, Button, Grid, HStack, Image, Text, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function AnthropogieHome() {
  return (
    <div>
      <Navbar/>
      <Carousels1 />
      <Button w="12rem" ml="650px" mt="-230px" >Shop Winterware</Button>
      <HStack w="98%" my="40px" ml="80px">
        <Image
          src="https://images.ctfassets.net/5de70he6op10/UX5eGE7bo9oUNjfdyQNsw/5c3abd7df830dd1824c5bce829721393/ALiving_HPG_LS_02-1.jpg?w=856&q=80&fm=webp"
          alt="img4"
          w="30%"
        />
        <Image
          src="https://images.ctfassets.net/5de70he6op10/1zuCu9TbfDDneL6yA8e5sb/e583bb7d47c24e69efc7d69692d3dc04/ALiving_HPG_LS_02-2.jpg?w=856&q=80&fm=webp"
          alt="img4"
          w="30%"
        />
        <Image
          src="https://images.ctfassets.net/5de70he6op10/ixPUaShh5Eh5L0qh7y3Od/3f06eddd2beff4d728b24a433681b545/ALiving_HPG_LS_02-3.jpg?w=856&q=80&fm=webp"
          alt="img4"
          w="30%"
        />
      </HStack>
      <Flex  w="75%" m="auto" gap="350px" mt="-100px" mb="100px">
            <Button w="18rem">Shop Cutlary</Button>
            <Button w="18rem">Shop Pillow</Button>
            <Button w="18rem">Shop Tables</Button>
        </Flex>
      <Grid templateColumns={"repeat(2, 1fr)"} gap="2rem" my="40px">
        <Image
          src="https://images.ctfassets.net/5de70he6op10/1gv0bdHTUEGoWrrdva2MJ5/c2e4dcd40a06168c9f567cc411bb8dab/ALiving_HPG_LS_03-1.jpg?w=1302&q=80&fm=webp"
          alt="img"
        />
        <Image
          src="https://images.ctfassets.net/5de70he6op10/3Nc4epRln0hVeOifvBgjeb/850c1fb077f764fe70f7d0915edfcdd6/ALiving_HPG_LS_03-2.jpg?w=1302&q=80&fm=webp"
          alt="img"
        />
        <Image
          src="https://images.ctfassets.net/5de70he6op10/23KKKvumo7U4SczXNClKpM/1637fa84100bd2b128bf72bef9e8d7bd/ALiving_HPG_LS_03-1.jpg?w=1302&q=80&fm=webp"
          alt="img"
        />
        <Image
          src="https://images.ctfassets.net/5de70he6op10/1qHRUR6jrJkiQi0QKFKKwI/67753bc6c969b27528add868a8d3a5b1/ALiving_HPG_LS_04-2.jpg?w=1302&q=80&fm=webp"
          alt="img"
        />
      </Grid>
      
      <Grid templateColumns="0.25fr 0.75fr" gap={0}>
        <Image
          src="https://images.ctfassets.net/5de70he6op10/4OMD9IMQyoMOZWdSr0RyRI/6b4fa49e55a158e7cf5ee12b3640b873/ALiving_HPG_LS_1-1.jpg?w=660&q=80&fm=webp"
          alt="img"
          py="70px"
        />
        <Carousels2 />
      </Grid>
      <HStack w="98%" my="40px" ml="80px">
        <Image
          src="https://images.ctfassets.net/5de70he6op10/5NMvn2EW7jQPxb0KEj00tq/927f51a83dcdb52b11ba2061d5788da1/ALiving_HPG_LS_04-1.jpg?w=856&q=80&fm=webp"
          alt="img4"
          w="30%"
        />
        <Image
          src="https://images.ctfassets.net/5de70he6op10/2dqt75QpvqczebUkzMGhai/3fc205cf6c0f429236c99f8ca969b781/ALiving_HPG_LS_04-3.jpg?w=856&q=80&fm=webp"
          alt="img4"
          w="30%"
        />
        <Image
          src="https://images.ctfassets.net/5de70he6op10/37ps3zN0FCIJqY5fF9h25i/69bf4e079ced119a682ba9e519764d93/ALiving_HPG_LS_04-1.jpg?w=856&q=80&fm=webp"
          alt="img4"
          w="30%"
        />
      </HStack>
      <HStack w="60%" m="auto" mt="-80px" spacing={"380px"}>
        <Button>shop the House of Hackney collection</Button>
        <Button>shop the Matilda Goad & Co. collection</Button>
        <Button>shop the Amber Lewis collection</Button>
      </HStack>
      <HStack w="98%" ml="80px" my="50px">
        <Image
          src="https://images.ctfassets.net/5de70he6op10/73np7oOZceFci3i1ru0gV9/0ef183425b0152e80876df50198c95a4/ALiving_HPG_LS_06-1-1.jpg?w=1302&q=80&fm=webp"
          alt="img3"
          w="45%"
        />
        <Image
          src="https://images.ctfassets.net/5de70he6op10/34LfFtI2dzsOcImPVh4XD7/18c445469e7d32c8f6047af05a320f1f/ALiving_HPG_LS_06-2.jpg?w=1302&q=80&fm=webp"
          alt="img3"
          w="45%"
        />
      </HStack>
      <Image
        src="https://images.ctfassets.net/5de70he6op10/tnwMf98WrLzJvHORas5fC/381eeaec38219b4659e03a30dd03bb9c/HomeL1_Gateway_LS_04-0.jpg?w=2640&q=80&fm=webp"
        alt="img"
      />
      <HStack w="98%" my="40px" ml="80px">
        <Image
          src="https://images.ctfassets.net/5de70he6op10/4zOhFzruiX2wGBUhAuaHDX/af4afb5bd0061c61406ecdca1ac83730/ALiving_HPG_LS_05-1.jpg?w=856&q=80&fm=webp"
          alt="img4"
          w="30%"
        />
        <Image
          src="https://images.ctfassets.net/5de70he6op10/3j9cWDPeDV24mItBHzCMpy/fd720252b838f210838b13b561af06e5/HomeL1_Gateway_LS_05-2.jpg?w=856&q=80&fm=webp"
          alt="img4"
          w="30%"
        />
        <Image
          src="https://images.ctfassets.net/5de70he6op10/9fUxloTLUrGyBT4p1f92n/f66477ee2c46f3f3d2df50555542a60b/HomeL1_Gateway_LS_05-3.jpg?w=856&q=80&fm=webp"
          alt="img4"
          w="30%"
        />
      </HStack>
      <HStack w="98%" my="40px" ml="80px">
        <Image
          src="https://images.ctfassets.net/5de70he6op10/7g7ZHaVt39w0CCLd3O0qke/403209ba2c4f5885fc9bfa13dbd3e462/HomeL1_Gateway_LS_08-1.jpg?w=856&q=80&fm=webp"
          alt="img4"
          w="30%"
        />
        <Image
          src="https://images.ctfassets.net/5de70he6op10/6qyHgZGFtupOWObJWdV3Wm/8804344079ae4623c4f9d9a45a3b0193/HomeL1_Gateway_LS_08-2.jpg?w=856&q=80&fm=webp"
          alt="img4"
          w="30%"
        />
        <Image
          src="https://images.ctfassets.net/5de70he6op10/k8kDADGs7wBTqS4n0kv06/71bcfaaba47b7dff1f6cd50fd5168724/HomeL1_Gateway_LS_08-3_copy.jpg?w=856&q=80&fm=webp"
          alt="img4"
          w="30%"
        />
      </HStack>
      <HStack w="98%" my="60px" ml="30px">
        <Box textAlign={"center"}>
          <Text my="5px" fontSize={"2xl"}>
            Anthro Design Services
          </Text>
          <Text my="5px" w="80%">
            Let's make your decorating dreams come true — from the cozy comfort
            of your home.
          </Text>
          <Button my="5px">Book a Free Virtual Appoitment Today</Button>
        </Box>
        <Box textAlign={"center"}>
          <Text my="5px" fontSize={"2xl"}>
            Anthro Design Services
          </Text>
          <Text my="5px" w="80%">
            Let's make your decorating dreams come true — from the cozy comfort
            of your home.
          </Text>
          <Button my="5px">Book a Free Virtual Appoitment Today</Button>
        </Box>
        <Box textAlign={"center"}>
          <Text my="5px" fontSize={"2xl"}>
            Anthro Design Services
          </Text>
          <Text my="5px" w="80%">
            Let's make your decorating dreams come true — from the cozy comfort
            of your home.
          </Text>
          <Button my="5px">Book a Free Virtual Appoitment Today</Button>
        </Box>
      </HStack>
      <Image
        src="https://images.ctfassets.net/5de70he6op10/66EQUlXgrBIE4akPH78UVn/bb9344cac779982cc1d61fd865ceadca/HomeL1_Gateway_LS_21.jpg?w=2640&q=80&fm=webp"
        alt="img"
      />
      <HStack m="auto" my="50px" w="95%">
        <Box>
          <Image
            src="https://images.ctfassets.net/5de70he6op10/1X4CBVQAx2jDT5SLGzrpPG/3e300db2c97fec1deee15cbc82c5f721/ALiving_HPG_LS_06-1.jpg?w=856&q=80&fm=webp"
            alt="img"
          />
          <Text fontSize={"xl"} fontWeight="bold">
            In Stock & Ready to Ship
          </Text>
          <Text>
            Need it sooner? These only-at-Anthro pieces are set to arrive in 30
            days or less!
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color="blue.800"
          >
            Shop All Furniture and Home
          </Text>
        </Box>
        <Box>
          <Image
            src="https://images.ctfassets.net/5de70he6op10/1X4CBVQAx2jDT5SLGzrpPG/3e300db2c97fec1deee15cbc82c5f721/ALiving_HPG_LS_06-1.jpg?w=856&q=80&fm=webp"
            alt="img"
          />
          <Text fontSize={"xl"} fontWeight="bold">
            In Stock & Ready to Ship
          </Text>
          <Text>
            Need it sooner? These only-at-Anthro pieces are set to arrive in 30
            days or less!
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color="blue.800"
          >
            Shop All Furniture and Home
          </Text>
        </Box>
        <Box>
          <Image
            src="https://images.ctfassets.net/5de70he6op10/1X4CBVQAx2jDT5SLGzrpPG/3e300db2c97fec1deee15cbc82c5f721/ALiving_HPG_LS_06-1.jpg?w=856&q=80&fm=webp"
            alt="img"
          />
          <Text fontSize={"xl"} fontWeight="bold">
            In Stock & Ready to Ship
          </Text>
          <Text>
            Need it sooner? These only-at-Anthro pieces are set to arrive in 30
            days or less!
          </Text>
          <Text
            cursor={"pointer"}
            textDecoration={"underline"}
            color="blue.800"
          >
            Shop All Furniture and Home
          </Text>
        </Box>
      </HStack>
      <Text
        textAlign={"center"}
        cursor={"pointer"}
        textDecoration={"underline"}
        color="blue.800"
        fontWeight={"bold"}
      >
        Exclusions apply. See details.
      </Text>
      <Footer/>
    </div>
  );
}

export default AnthropogieHome;
