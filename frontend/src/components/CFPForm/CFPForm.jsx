import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLink ,faBlog} from '@fortawesome/free-solid-svg-icons';

import {
  Box,
  Button,
  Heading,
  Flex,
  FormControl,

  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';

function CFPForm () {
  return (
    <>
          <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 3px 3px rgba(0,0,0,0.3)"
        maxWidth={600}
        p={6}
        m="10px auto"
        as="form"
        my={10} py={10} px={10}
        >
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Call For Proposals!
      </Heading>
      <Flex>
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="first-name" fontWeight={'normal'} >
            Title
          </FormLabel>
          <Input id="title" type="text" placeholder="Title"  />
        </FormControl>
      </Flex>
        <Flex>
      <FormControl mr="5%" isRequired>
        <FormLabel  fontWeight={'normal'} my={"2%"}>
          Description 
        </FormLabel>
        <Textarea id = "description" type="textarea" />
      </FormControl>
        </Flex>
        <Flex>
      <FormControl mr="5%">
        <FormLabel htmlFor="email" fontWeight={'normal'} my={"2%"}>
          GitHub
          <FontAwesomeIcon icon={faGithub} style={{ marginLeft: "10px" }}  color={"white"}/>
 
        </FormLabel>
        <Input id="github" type="text" />
      </FormControl>
        </Flex>
        <Flex>
      <FormControl mr="5%">
        <FormLabel htmlFor="text" fontWeight={'normal'} my={"2%"}>
          LinkedIn 
        <FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: "10px" }} />

        </FormLabel>
        <Input id="linkedin" type="text" />
      </FormControl>
        </Flex>
        <Flex>
      <FormControl mr="5%">
        <FormLabel htmlFor="text" fontWeight={'normal'} my={"2%"}>
          Twitter             
          <FontAwesomeIcon icon={faTwitter} style={{ marginLeft: "10px" , color:'lightblue'}} />

        </FormLabel>
        <Input id="twitter" type="text" />
      </FormControl>
        </Flex>
        <Flex>
      <FormControl mr="5%">
        <FormLabel htmlFor="email" fontWeight={'normal'} my={"2%"}>
          Website <FontAwesomeIcon icon={faLink} style={{ marginLeft: "10px" }}  />
        </FormLabel>
        <Input id="website" type="email"  />
      </FormControl>
        </Flex>
        <Flex>
      <FormControl mr="5%">
        <FormLabel htmlFor="email" fontWeight={'normal'} my={"2%"}>
          Blog <FontAwesomeIcon icon={faBlog} style={{ marginLeft: "10px" }}/>
        </FormLabel>
        <Input id="blog" type="text" />
      </FormControl>
        </Flex>
        <Button colorScheme='teal' my={10} mx={"35%"} 
       
>Submit</Button>

      </Box>
    </>
  );
};
export default CFPForm;