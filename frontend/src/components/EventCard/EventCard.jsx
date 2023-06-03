import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export default function EventCard({
  id,
  title,
  description,
  isApproved,
  time,
  date,
  image,
  mode,
  location,
  price,
  speakerApplications,
  speakers,
  attendees,
  volunteers,
  tickets,
  volunteersApplications,
  organizer,
  domain,
}) {
  return (
    <div>
      {isApproved && (
        <Center py={6}>
          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6}>
              <Image
                src={
                  "https://www.travelperk.com/wp-content/uploads/alexandre-pellaes-6vAjp0pscX0-unsplash-1-1-720x480.jpg"
                }
                layout={"fit"}
                h={"210px"}
                w={"full"}
              />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                {domain}
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                Boost your conversion rate
              </Heading>
              <Text color={"gray.500"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={organizer.image}
                alt={"Author"}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>{organizer.name}</Text>
                <Text color={"gray.500"}>Feb 08, 2021 </Text>
              </Stack>
              <Stack>
                <Text ml={8} color={"green.400"} px={10} fontWeight={"bold"}>
                  Online
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
      )}
    </div>
  );
}
