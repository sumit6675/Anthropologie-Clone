import "./App.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Anthropologie from "./Components/Anthropologie";
import Footer from "./Components/Footer";
import AnthropogieHome from "./Components/AnthropogieHome";
import Sign from "./Components/Sign";
import SignUp from "./Components/SignUp";
function App() {
  return (
    <>
      <Tabs variant="unstyled">
        <TabList justifyContent={"space-around"} fontFamily="Brush Script MT, Brush Script Std, cursive">
          <Tab h="50px" fontSize={"35px"} _selected={{ color: "white", bg: "green.400" }} mt="30px" p="10px">
            Anthropologie
          </Tab>
          <Tab h="50px" fontSize={"35px"} _selected={{ color: "white", bg: "green.400" }} mt="30px" p="10px">
            Anthropologie-Home
          </Tab>
          <Image src="https://iili.io/ydiTiJ.png" alt="logo" w="200px" mt="-20px" p="10px"/>
          <Tab h="50px"  fontSize={"35px"} _selected={{ color: "white", bg: "green.400" }} mt="30px" p="10px">
            Sign In
          </Tab>
          <Tab h="50px"  fontSize={"35px"} _selected={{ color: "white", bg: "green.400" }} mt="30px" p="10px">
            Sign Up
          </Tab>
          <Tab h="50px"  fontSize={"35px"} _selected={{ color: "white", bg: "green.400" }} mt="30px" p="10px">
            Cart
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
           <Navbar/>
           <Anthropologie/>
           <Footer/>
          </TabPanel>
          <TabPanel>
            <Navbar/>
            <AnthropogieHome/>
            <Footer/>
          </TabPanel>
          <TabPanel>
            <Navbar/>
            <Sign/>
            <Footer/>
          </TabPanel>
          <TabPanel>
            <Navbar/>
            <SignUp/>
            <Footer/>
          </TabPanel>
          <TabPanel>
            <Navbar/>
            <Footer/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default App;
