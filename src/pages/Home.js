import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Button, Heading, VStack, Container } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container centerContent minH="100vh">
      <VStack spacing={6} textAlign="center">
        <Heading size="xl">Empowering Businesses with Seamless E-Commerce & Fintech Solutions</Heading>
        <Text fontSize="lg" color="gray.600">
          We specialize in Shopify, Stripe, and full-stack web development to scale your business.
        </Text>
        <Button as={Link} to="/services" colorScheme="blue" size="lg">
          Explore Our Services
        </Button>
      </VStack>
    </Container>
  );
};

export default Home;
