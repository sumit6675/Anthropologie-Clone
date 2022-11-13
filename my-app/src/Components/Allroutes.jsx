import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AnthropogieHome from './AnthropogieHome'
import Anthropologie from './Anthropologie'
import Cart from './Cart'
import Productpage from './Productpage'
import Sign from './Sign'
import SignUp from './SignUp'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Anthropologie/>}/>
            <Route path="/anthropologiehome" element={<AnthropogieHome/>}/>
            <Route path="/login" element={<Sign/>}/>
            <Route path="/logout" element={<SignUp/>}/>
            <Route path="/product" element={<Productpage/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes