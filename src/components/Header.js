import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="gray.900" px={6} py={4} color="white">
      <Flex align="center">
        <Heading size="md">Commerce For All</Heading>
        <Spacer />
        <Flex gap={4}>
          <Button as={Link} to="/" variant="link" color="white">Home</Button>
          <Button as={Link} to="/services" variant="link" color="white">Services</Button>
          <Button as={Link} to="/about" variant="link" color="white">About</Button>
          <Button as={Link} to="/contact" variant="link" color="white">Contact</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
