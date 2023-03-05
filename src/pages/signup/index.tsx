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

export default function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const callApi = async () => {
    try {
      const res = await fetch(`http://localhost:3000/users/`);
      const data = await res.json();
      console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };

  async function onSubmit(values) {
    const response = await fetch("http://localhost:3000/auth/signup", {
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
        <title>Sprelo - Sign Up</title>
      </Head>
      <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={7} align="center" justify="center">
          <Stack spacing={4} w="full" maxW="md">
            <Text fontSize="45px" pb="69">
              Sign up
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="fullName" isInvalid={errors.fullName}>
                <FormLabel htmlFor="fullName">Full Name</FormLabel>
                <Input
                  bgColor="gray.200"
                  border="1px"
                  borderColor="gray.400"
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "This is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length should be 3",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.fullName && errors.fullName.message}
                </FormErrorMessage>
              </FormControl>
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
              <FormControl
                id="confirmPassword"
                isInvalid={errors.confirmPassword}
              >
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password
                </FormLabel>
                <Input
                  bgColor="gray.200"
                  border="1px"
                  borderColor="gray.400"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.confirmPassword && errors.confirmPassword.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align="start"
                  justify="space-between"
                ></Stack>
                <Button
                  color="white"
                  bgColor="yellow.500"
                  variant="solid"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Confirm
                </Button>
                <Button color="black" bgColor="gray.300" variant="solid">
                  Cancel
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
