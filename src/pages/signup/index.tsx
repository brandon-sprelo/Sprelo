import Head from "next/head";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sprelo - Sign Up</title>
      </Head>
      <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={7} align="center" justify="center">
          <Stack spacing={4} w="full" maxW="md">
            <Text fontSize="45px" pb="69">
              Sign up
            </Text>
            <FormControl id="fullName">
              <FormLabel>Full Name</FormLabel>
              <Input
                bgColor="gray.200"
                border="1px"
                borderColor="gray.400"
                type="email"
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                bgColor="gray.200"
                border="1px"
                borderColor="gray.400"
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                bgColor="gray.200"
                border="1px"
                borderColor="gray.400"
                type="password"
              />
            </FormControl>
            <FormControl id="confirmPassword">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                bgColor="gray.200"
                border="1px"
                borderColor="gray.400"
                type="password"
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align="start"
                justify="space-between"
              ></Stack>
              <Button color="white" bgColor="yellow.500" variant="solid">
                Confirm
              </Button>
              <Button color="black" bgColor="gray.300" variant="solid">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex
          flex={3}
          border="1px"
          borderColor="gray.200"
          bg="yellow.400"
        ></Flex>
      </Stack>
    </>
  );
}
