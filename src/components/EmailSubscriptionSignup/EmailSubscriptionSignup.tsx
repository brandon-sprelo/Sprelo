import {
  Box,
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

export default function EmailSubscriptionSignup() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const toast = useToast();

  const onSubmit = async (values) => {
    const response = await fetch("http://localhost:3000/email-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = await response.json();
    toast({
      title: "Email subscription submitted!.",
      description: "Thanks for subscribing!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <>
      <Flex direction={{ base: "column" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="email" isInvalid={errors.email}>
            <Stack
              spacing={1}
              direction={{ base: "column", sm: "row" }}
              // align="start"
              // justify="space-between"
            >
              <Input
                maxW="437px"
                bgColor="input.background"
                border="1px"
                borderColor="black"
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
              <Button
                w="100%"
                maxW="139px"
                color="white"
                bgColor="black"
                variant="solid"
                // isLoading={isSubmitting}
                type="submit"
                fontFamily="Satoshi-Bold"
                fontSize="18px"
              >
                Enter
              </Button>
            </Stack>
          </FormControl>
        </form>
        <Flex pt="15px" pl="10px">
          <Text>Create your free account. No Credit Card required.</Text>
        </Flex>
      </Flex>
    </>
  );
}
