import React, { useState, useEffect } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";

const obj = {
  title: "",
  description: "",
  mode: "",
  domain: "",
  datetime: "",
  location: "",
  tickets: 0,
  prize: 0,
};
console.log(obj);

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState("");

  obj.title = title;
  obj.description = description;
  obj.mode = mode;

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Add Event Details
      </Heading>
      <FormControl>
        <FormLabel htmlFor="title" fontWeight={"normal"}>
          Event Title
        </FormLabel>
        <Input
          id="title"
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      <FormControl mr="5%" mt="2%">
        <FormLabel htmlFor="description" fontWeight={"normal"}>
          Description
        </FormLabel>
        <Textarea
          placeholder="Event Description..."
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{
            sm: "sm",
          }}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormHelperText>
          Brief description for the event. URLs are hyperlinked.
        </FormHelperText>
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3]} mt="2%">
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Mode
        </FormLabel>
        <Select
          id="mode"
          name="mode"
          autoComplete="mode"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e) => setMode(e.target.value)}
        >
          <option>Online</option>
          <option>In-Person</option>
        </Select>
      </FormControl>
    </>
  );
};

const Form2 = () => {
  const [domain, setDomain] = useState("");
  const [datetime, setDatetime] = useState("");
  const [location, setLocation] = useState("");

  obj.domain = domain;
  obj.datetime = datetime;
  obj.location = location;

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Add Event Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]} mt="2%">
        <FormLabel
          htmlFor="domain"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Domain
        </FormLabel>
        <Select
          id="domain"
          name="domain"
          autoComplete="domain"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e) => setDomain(e.target.value)}
        >
          <option>AI-ML</option>
          <option>Blockchain</option>
          <option>Devops</option>
          <option>Cyber Security</option>
          <option>Web development</option>
          <option>Mobile development</option>
          <option>Cloud Computing</option>
          <option>Game Development</option>
          <option>Other</option>
        </Select>
      </FormControl>
      <FormControl mt="2%">
        <FormLabel htmlFor="datetime-local" fontWeight={"normal"}>
          Date and Time
        </FormLabel>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          id="datetime-local"
          onChange={(e) => setDatetime(e.target.value)}
        />
      </FormControl>
      <FormControl mt="2%">
        <FormLabel htmlFor="location" fontWeight={"normal"}>
          Location
        </FormLabel>
        <Input
          id="location"
          placeholder="Location..."
          onChange={(e) => setLocation(e.target.value)}
        />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  const [tickets, setTickets] = useState(0);
  const [prize, setPrize] = useState(0);

  obj.tickets = parseInt(tickets);
  obj.prize = parseInt(prize);

  console.log(obj);

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Add Event Details
      </Heading>
      <FormControl mt="2%">
        <FormLabel htmlFor="tickets" fontWeight={"normal"}>
          Total no. of Tickets to issue
        </FormLabel>

        <Input
          id="tickets"
          placeholder="No. of Tickets..."
          min={1}
          onChange={(e) => setTickets(e.target.value)}
        />
      </FormControl>
      <FormControl mt="2%">
        <FormLabel htmlFor="prize" fontWeight={"normal"}>
          Prize of each Ticket
        </FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="$"
          />
          <Input
            placeholder="Enter amount"
            onChange={(e) => setPrize(e.target.value)}
          />
          <InputRightElement>
            <CheckIcon color="green.500" />
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

export default function multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [id, setId] = useState("");
  const { user } = useAuth0();
  const email = user.email;
  useEffect(() => {}, []);

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);

                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={async () => {
                  const res = await fetch(
                    `http://localhost:5000/api/users/${email}`
                  );
                  const data = await res.json();
                  setId(data._id);
                  console.log(id);
                  let events = await fetch(
                    `http://localhost:5000/api/events/add`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        title: obj.title,
                        description: obj.description,
                        mode: obj.mode,
                        location: obj.location,
                        date: obj.datetime,
                        organizer: id,
                        price: obj.price,
                        tickets: obj.tickets,
                        domain: obj.domain,
                      }),
                    }
                  );
                  console.log(events.json());
                  toast({
                    title: "Event Details Submitted.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
