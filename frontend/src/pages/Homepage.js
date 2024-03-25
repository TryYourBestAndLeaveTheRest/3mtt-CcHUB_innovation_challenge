import React from "react";
import {
  VStack,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Signup from "../components/auth/signup";
const Homepage = () => {
  return (
    <VStack>
      <Navbar />
      <Tabs
        boxShadow="base"
        rounded={"md"}
        isFitted
        variant="enclosed"
        width={"50%"}
        borderColor={"yellow"}
      >
        <TabList mb="1em">
          <Tab>SignUp</Tab>
          <Tab>Login</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Signup />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default Homepage;
