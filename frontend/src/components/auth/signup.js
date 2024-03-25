import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import React from "react";

const Signup = () => {
  return (
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type="email" />
      <FormLabel>Password</FormLabel>
      <Input type="password" />
      <Button mt={4} colorScheme="blue">
        SignUp
      </Button>
    </FormControl>
  );
};

export default Signup;
