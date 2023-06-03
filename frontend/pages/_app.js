import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  const colors = {
    brand: {
      50: "#ecefff",
      100: "#cbceeb",
      200: "#a9aed6",
      300: "#888ec5",
      400: "#666db3",
      500: "#4d5499",
      600: "#3c4178",
      700: "#2a2f57",
      800: "#181c37",
      900: "#080819",
    },
  };
  const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  };

  const theme = extendTheme({ colors, config });
  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp;
