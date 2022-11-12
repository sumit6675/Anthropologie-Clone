import React from 'react'
import { Heading,Box,Text, Input,Checkbox, Button,FormLabel} from '@chakra-ui/react'
function Sign() {
  return (
   <Box >
        <Box w="35%" m="auto" my="30px" border={"1px solid black"} p="20px" textAlign={"center"}>
            <Heading my="15px">Sign In</Heading>
            <Text w="98%" m="auto" textAlign={"center"} mb="20px" >Sign in so you can save items to your wishlists, track your orders, and check out faster!</Text>
            <FormLabel>*Email
          <br/>
          <Input placeholder='Email' w="95%" mb="20px"/></FormLabel>
                      <br></br>
            <Checkbox my="10px" defaultChecked>Keep me signed in</Checkbox>
            <br/>
            <Button w="70%" my="15px" mt="10px">NEXT</Button>
            <br/>
            <Button w="70%" my="5px" mb="60px" >USE MOBILE NUMBER INSTEAD</Button>
        </Box>
   </Box>
  )
}

export default Sign