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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const Links = [
  {
    key: 1,
    name: "Explore",
    href: "/events",
  },
  {
    key: 2,
    name: "Organize an Event",
    href: "/organize_event",
  },
];

export default function Simple() {
  const { user, error, isLoading } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>TechXMumbai</Box>
          </HStack>
          <Flex alignItems={"center"}>
            {
              isLoading && (
                <div>Loading...</div>
              )
            }
            {user && (
              <HStack spacing={8} alignItems={"center"}>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                >
                  {Links.map((link) => (
                    <Link href={link.href}>{link.name}</Link>
                  ))}
                </HStack>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={
                        user.picture
                      }
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Welcome {user.name}</MenuItem>
                    <MenuItem alignItems={"center"}>View Profile</MenuItem>
                    <MenuDivider />
                    <MenuItem>
                      <Link href="/api/auth/logout">Logout</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            )}
            {!user && (
              <Link href="/api/auth/login">
                <Button variant={"solid"} colorScheme={"teal"} size={"sm"}>
                  Login
                </Button>
              </Link>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link key={link.key} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
