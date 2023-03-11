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

  const onSubmit = () => {
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
      <Flex direction={{ base: "column"}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="email" isInvalid={errors.email}>
            <Stack
              spacing={1}
              direction={{ base: "column", sm: "row" }}
              // align="start"
              // justify="space-between"
            >
              <Input
                bgColor="input.background"
                border="1px"
                borderColor="input.border"
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
                Enter
              </Button>
            </Stack>
          </FormControl>
        </form>
        <Flex>
          <Text>Create your free account. No Credit Card required.</Text>
        </Flex>
      </Flex>
    </>
  );
}
