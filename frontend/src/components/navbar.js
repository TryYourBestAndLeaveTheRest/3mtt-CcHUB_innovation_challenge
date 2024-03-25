import {
  Box,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Navbar = (button1, button2) => {
  return (
    <Box color={"green"} bg={"yellow"} width={"100%"}>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer />
        <Flex height={20} gap={"2"}>
          <Center>
            <Text _hover={{ color: "red" }}>Support Us</Text>
          </Center>
          <Center>
            <Text>Drop Suggestion</Text>
          </Center>
          <Center>
            <Text>Get Details</Text>
          </Center>
        </Flex>

        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">{button1}</Button>
          <Button colorScheme="teal">{button2} </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Navbar;
