import React from 'react';
import { Input, Textarea, Button, Heading, VStack, Container } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Container centerContent minH="100vh">
      <VStack spacing={4} w="100%" maxW="500px">
        <Heading>Contact Us</Heading>
        <Input placeholder="Your Name" size="lg" />
        <Input placeholder="Your Email" size="lg" />
        <Textarea placeholder="Your Message" size="lg" />
        <Button colorScheme="blue" size="lg">Send Message</Button>
      </VStack>
    </Container>
  );
};

export default Contact;
