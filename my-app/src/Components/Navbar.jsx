import { HStack } from '@chakra-ui/react'
import React from 'react'
import Accessories from './Accessories'
import BeautyWellness from './BeautyWellness'
import BHLDNWeddings from './BHLDNWeddings'
import Clothing from './Clothing'
import Dresses from './Dresses'
import GardenOutdoor from './GardenOutdoor'
import Gift from './Gift'
import HomeFurniture from './HomeFurniture'
import News from "./News"
import Sale from './Sale'
import Shoes from './Shoes'

function Navbar() {
  return (
    <HStack justifyContent={"space-around"} mt="-80px">
        <Gift/>
        <News/>
        <Dresses/>
        <Clothing/>
        <Shoes/>
        <Accessories/>
        <BHLDNWeddings/>
        <HomeFurniture/>
        <BeautyWellness/>
       <GardenOutdoor/>
        <Sale/>
    </HStack>
  )
}

export default Navbar