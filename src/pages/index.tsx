import { useLoggedInStatus } from "@/hooks/useLoggedInStatus";
import { deleteAccessToken, getAccessToken } from "@/utils/cookie.utils";
import { Button, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { loggedIn, setLoggedIn } = useLoggedInStatus();
  const handleLogout = () => {
    deleteAccessToken();
    setLoggedIn(false);
  };

  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>Sprelo</title>
      </Head>
      <div>
        <Text fontSize="65px" fontWeight="800">
          Sprelo
        </Text>

        {loggedIn ? (
          <>
            <Button onClick={handleLogout}>Logout</Button>

            <Text>Logged In</Text>
          </>
        ) : (
          <>
            <Button>
              <Link href="/login">Log in</Link>
            </Button>
            <Button>
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Text>Not signed in</Text>
          </>
        )}
      </div>
    </>
  );
}
