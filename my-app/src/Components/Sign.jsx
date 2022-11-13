import React from "react";
import {
  Heading,
  Box,
  Text,
  Input,
  Checkbox,
  Button,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
function Sign() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setloading] = React.useState(false);
  const { loginUser } = useContext(AuthContext);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setloading(true)
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password})
    })
    .then(res=>res.json())
    .then(res=>{
      if(res.token){
       loginUser(res.token)
      }
    })
    .catch(err=>{
      console.log(err)
    })
  }
  return (
    <Box>
      <Navbar />
      <Box
        w="35%"
        m="auto"
        my="30px"
        border={"1px solid black"}
        p="20px"
        textAlign={"center"}
      >
        <Heading my="15px">Sign In</Heading>
        <Text w="98%" m="auto" textAlign={"center"} mb="20px">
          Sign in so you can save items to your wishlists, track your orders,
          and check out faster!
        </Text>
        <FormLabel>
          *Email
          <br />
          <Input 
          placeholder="Email"
           w="95%" mb="2px"
           value={email}
           onChange={e=>setEmail(e.target.value)}
           type="email"
            />
        </FormLabel>
        <br />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={e=>setPassword(e.target.value)}
            value={password}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Checkbox my="10px" defaultChecked>
          Keep me signed in
        </Checkbox>
        <br />
        <Button w="70%" my="15px" mt="10px" disabled={loading} type="submit" onClick={handleSubmit}>
          Login
        </Button>
        <br />
        <Button w="70%" my="5px" mb="60px">
          USE MOBILE NUMBER INSTEAD
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}

export default Sign;
