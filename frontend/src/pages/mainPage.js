import { VStack } from "@chakra-ui/react";
// import React, { useState } from "react";
// import ProjectDetails from "../components/projects/projectDetails";
import UserView from "../components/userView";
const MainPage = () => {
  return (
    <VStack>
      {/* <ProjectDetails /> */}
      <UserView />
    </VStack>
  );
};

export default MainPage;
// mongodb+srv://sherifdeen:<password>@cluster0.oinpgtx.mongodb.net/
