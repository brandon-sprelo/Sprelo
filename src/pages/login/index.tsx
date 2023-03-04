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
  Text
} from "@chakra-ui/react";
export default function Login() {
  return (
    <>
      <Head>
        <title>Sprelo - Log In</title>
      </Head>
      <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
        <Flex></Flex>
        <Flex p={8} flex={7} align="center" justify="center">
          <Stack spacing={4} w="full" maxW="md">
            <Text fontSize="45px" pb="69">
              Welcome back!
            </Text>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input bgColor="gray.200" border="1px" borderColor="gray.400" type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input bgColor="gray.200" border="1px" borderColor="gray.400" type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align="start"
                justify="space-between"
              >
              </Stack>
              <Button color="white" bgColor="black" variant="solid">
                Login
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
