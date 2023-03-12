import Head from "next/head";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { getAccessToken, setAccessTokenCookie } from "@/utils/cookie.utils";
import Link from "next/link";
import { useRouter } from "next/router";
import SpreloIcon from "@/icons/SpreloIcon";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();

  const router = useRouter();

  async function profileSubmit() {
    const response = await fetch("http://localhost:3000/profile", {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("data", data);
      return data;
    } else {
      console.error("Failed to fetch protected data");
    }
  }
  async function onSubmit(values: any) {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      const { access_token } = await response.json();
      setAccessTokenCookie(access_token);
      toast({
        title: "Login successful.",
        description: "Welcome back to Sprelo.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/");
    } else {
      console.error("login failed");
      toast({
        title: "Login failed.",
        description: "Invalid email or password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  return (
    <>
      <Head>
        <title>Sprelo - Log In</title>
      </Head>
      <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={7} align="center" justify="center">
          <Stack spacing={4} w="full" maxW="container.md">
            <Flex justifyContent="space-between">
              <Link href="/">
                <SpreloIcon />
              </Link>
              <Text fontSize="15px" as="u" display="flex" alignItems="center">
                <Link href="/signup">Sign up</Link>
              </Text>
            </Flex>
            <Text fontSize="45px" pb="69" pt="102">
              Welcome back!
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <FormControl id="password" isInvalid={!!errors.password}>
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
              <Stack spacing={6}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align="start"
                  justify="space-between"
                ></Stack>
                <Button
                  color="white"
                  bgColor="black"
                  variant="solid"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Login
                </Button>
              </Stack>
            </form>
            {/* <Button
              color="white"
              bgColor="black"
              variant="solid"
              onClick={profileSubmit}
            >
              Get Profile
            </Button> */}
          </Stack>
        </Flex>
        <Flex
          flex={3}
          border="1px"
          borderColor="gray.200"
          bg="sprelo.yellow"
        ></Flex>
      </Stack>
    </>
  );
}
