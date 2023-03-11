import CallToActionWithVideo from "@/components/Examples/CTAWithVideoExample";
import Header from "@/components/Header";
import { useLoggedInStatus } from "@/hooks/useLoggedInStatus";
import { deleteAccessToken, getAccessToken } from "@/utils/cookie.utils";
import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { loggedIn, setLoggedIn } = useLoggedInStatus();
  const handleLogout = () => {
    deleteAccessToken();
    setLoggedIn(false);
  };
  return (
    <>
      <Head>
        <title>Sprelo</title>
      </Head>
      <div>
        <Header />
        {/* <Container maxW={"7xl"} bgColor="sprelo.yellow">
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          ></Stack>
        </Container> */}
        <CallToActionWithVideo />
      </div>
    </>
  );
}
