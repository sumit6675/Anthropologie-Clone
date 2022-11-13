import React from "react";
import {
  Heading,
  Box,
  Text,
  Input,
  Button,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Checkbox,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function SignUp() {
  return (
    <Box>
      <Navbar/>
      <Box
        w="35%"
        m="auto"
        my="30px"
        border={"1px solid black"}
        p="20px"
        textAlign={"center"}
      >
        <Heading my="15px">Sign Up</Heading>
        <Text w="98%" m="auto" textAlign={"center"} mb="20px">
          Welcome to Anthropologie! It's quick and easy to set up an account.
        </Text>
        <FormLabel>
          *Email
          <br />
          <Input placeholder="Email" w="95%" mb="20px" />
        </FormLabel>
        <FormLabel>
          *Mobile Number
          <br />
          <InputGroup>
            <InputLeftAddon children="+91" />
            <Input type="tel" placeholder="phone number" />
          </InputGroup>
        </FormLabel>
        <br />
        <Checkbox defaultChecked>Keep me signed in</Checkbox>
        <br/>
        <Button w="70%" my="25px" mt="10px">
          NEXT
        </Button>
        <br />
        <Checkbox w="90%" m="auto" textAlign={"left"} defaultChecked>
          Sign me up to receive Anthropologie offers, 
        promotions and other commercial messages. By creating an account, 
        I agree to Anthropologie's Terms of Service and Privacy Policy. 
        I may unsubscribe at any time. Creating an account will
         not enroll you in SMS marketing.
         </Checkbox>
       <Text textAlign={"left"} w="90%" m="auto" my="30px" fontSize={"sm"}>
       By creating an account, you agree to Anthropologie's terms of use and 
       privacy policy. Landlines, VoIP, and prepaid phones are not supported.
        Standard message & data rates may apply. Message frequency may vary. 
        Reply HELP for help, and STOP to cancel. Contact us for more information.
       </Text>
       <Text fontSize={"2xl"} fontWeight="bold" my="20px">Already Have an Account?</Text>
       <Button my="25px" fontSize={"xl"} w="40%">SIGN IN</Button>
      </Box>
      <Footer/>
    </Box>
  );
}

export default SignUp;
