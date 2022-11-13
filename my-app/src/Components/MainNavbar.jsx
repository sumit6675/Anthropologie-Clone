import React from "react";
import { Link } from "react-router-dom";
import { Flex, Image, Text } from "@chakra-ui/react";
function MainNavbar() {
  return (
    <Flex
      mb="80px"
      justifyContent={"space-around"}
      p="10px"
      bg="tomato.200"
      fontFamily={"Brush Script MT, Brush Script Std, cursive"}
    >
      <Link to="/">
        <Text h="50px" fontSize={"35px"} mt="30px" p="10px">
          Anthropologie
        </Text>
      </Link>
      <Link to="/anthropologiehome">
        <Text h="50px" fontSize={"35px"} mt="30px" p="10px">
          Anthropologie-Home
        </Text>
      </Link>
      <Link to="/">
        <Image
          src="https://iili.io/ydiTiJ.png"
          alt="image1"
          w="200px"
          mt="-20px"
          borderRadius={"full"}
        />
      </Link>
      <Link to="/login">
        <Text h="50px" fontSize={"35px"} mt="30px" p="10px">
          Login
        </Text>
      </Link>
      <Link to="/logout">
        <Text h="50px" fontSize={"35px"} mt="30px" p="10px">
          Logout
        </Text>
      </Link>
      <Link to="/cart">
        <Text
          h="50px"
          fontSize={"35px"}
          _selected={{ color: "white", bg: "green.400" }}
          mt="30px"
          p="10px"
        >
          Cart
        </Text>
      </Link>
    </Flex>
  );
}

export default MainNavbar;
