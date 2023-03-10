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
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import SpreloIcon from "@/icons/SpreloIcon";

export default function Signup() {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = watch("password"); // watch for changes in the password field

  const toast = useToast();

  async function onSubmit(values: any) {
    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(`${result.error}`);
      }
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: "Account creation error.",
        description: "Unable to create account.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <>
      <Head>
        <title>Sprelo - Sign Up</title>
      </Head>
      <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={7} align="center" justify="center">
          <Stack spacing={4} w="full" maxW="container.md">
            <Flex justifyContent="space-between">
              <Link href="/">
                <SpreloIcon />
              </Link>
              <Text fontSize="15px" as="u" display="flex" alignItems="center">
                <Link href="/login">Sign in</Link>
              </Text>
            </Flex>
            <Text fontSize="45px" pb="69" pt="92">
              Sign up for Sprelo
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl
                id="fullName"
                isInvalid={!!errors.fullName}
                pb="10px"
              >
                <FormLabel htmlFor="fullName">Full Name</FormLabel>
                <Input
                  bgColor="input.background"
                  border="1px"
                  borderColor="input.border"
                  type="text"
                  id="fullName"
                  {...register("fullName", {
                    required: "This is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length should be 3",
                    },
                  })}
                />
                <FormErrorMessage>
                  <>{errors.fullName && errors.fullName.message}</>
                </FormErrorMessage>
              </FormControl>
              <FormControl id="email" isInvalid={!!errors.email} pb="10px">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  bgColor="input.background"
                  border="1px"
                  borderColor="input.border"
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>
                  <>{errors.email && errors.email.message}</>
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                isInvalid={!!errors.password}
                pb="10px"
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  bgColor="input.background"
                  border="1px"
                  borderColor="input.border"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>
                  <>{errors.password && errors.password.message}</>
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="confirmPassword"
                isInvalid={!!errors.confirmPassword}
              >
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password
                </FormLabel>
                <Input
                  bgColor="input.background"
                  border="1px"
                  borderColor="input.border"
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "This is required",
                    validate: (value) => value === password, // compare the confirm password field to the password field
                  })}
                />
                <FormErrorMessage>
                  <>
                    {errors.confirmPassword && errors.confirmPassword.message}
                    {errors.confirmPassword &&
                      errors.confirmPassword.type === "validate" && (
                        <span>Passwords do not match</span>
                      )}
                  </>
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={5}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align="start"
                  justify="space-between"
                ></Stack>
                <Button
                  color="white"
                  bgColor="button.confirm"
                  variant="solid"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Confirm
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
        <Flex
          flex={3}
          border="1px"
          borderColor="gray.200"
          bg="sprelo.yellow"
        ></Flex>
        {/* <Toast/> */}
      </Stack>
    </>
  );
}
