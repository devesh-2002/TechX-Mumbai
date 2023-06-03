import { Box,Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Custom404 = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      
    >
      <div>     
        <Image src="https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif" alt="Animated GIF" maxWidth="300px" mb={10} mx={10} />
        <Link to="/" passHref>
          <Button as="a" colorScheme="blue" mx={"32%"} mb={10}>
            Go back home
          </Button>
        </Link>
      </div>
      
    </Box>
  );
};

export default Custom404;
