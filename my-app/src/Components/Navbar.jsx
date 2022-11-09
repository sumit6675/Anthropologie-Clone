import { HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Dresses from './Dresses'
import Gift from './Gift'
import News from "./News"

function Navbar() {
  return (
    <HStack justifyContent={"space-around"} mt="-40px">
        <Gift/>
        <News/>
        <Dresses/>
        <Text>Clothing</Text>
        <Text>Shoes</Text>
        <Text>Accessories</Text>
        <Text>BHLDN-Weddings</Text>
        <Text>Home & Furniture</Text>
        <Text>Beauty & Wellness</Text>
        <Text>Garden & Outdoor</Text>
        <Text>Sale</Text>
    </HStack>
  )
}

export default Navbar