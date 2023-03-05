import Head from "next/head";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = await response.json();
    console.log("Result: ", result);
  }
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="email" isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  bgColor="gray.200"
                  border="1px"
                  borderColor="gray.400"
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  bgColor="gray.200"
                  border="1px"
                  borderColor="gray.400"
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align="start"
                  justify="space-between"
                ></Stack>
                <Button color="white" bgColor="black" variant="solid" isLoading={isSubmitting} type="submit">
                  Login
                </Button>
              </Stack>
            </form>
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
