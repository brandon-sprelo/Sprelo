import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import SpreloIconSideways from "@/icons/SpreloIconSideways";
import { useLoggedInStatus } from "@/hooks/useLoggedInStatus";
import { deleteAccessToken, getAccessToken } from "@/utils/cookie.utils";
import Link from "next/link";
import Person from "@/icons/Person";

const Links = [""];

const NavLink = ({ children }: { children: ReactNode }) => (
  <ChakraLink
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </ChakraLink>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loggedIn, setLoggedIn } = useLoggedInStatus();
  const handleLogout = () => {
    deleteAccessToken();
    setLoggedIn(false);
  };
  return (
    <>
      <Box
        bg={useColorModeValue("white", "white")}
        px={{ base: "30px", md: "120px" }}
        py="15px"
        borderBottom="2px"
        borderColor="black"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            bgColor="white"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack spacing={10}>
              <SpreloIconSideways width={200} height={140} pt={5} />
            </HStack>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {loggedIn ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  pr="6"
                >
                  <Person boxSize="8" />
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <>
                {/* <Button mr={2}>
                  <Link href="/login">Log in</Link>
                </Button> */}
                <Button bgColor="white">
                  <Link href="/signup">Sign in</Link>
                </Button>
              </>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
