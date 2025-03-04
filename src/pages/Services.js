import React from 'react';
import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import ServiceCard from '../components/ServiceCard';

const services = [
  { title: "E-Commerce Development", description: "Shopify & BigCommerce custom solutions." },
  { title: "Fintech & Payment Solutions", description: "Stripe API integrations and payment optimization." },
  { title: "Web Development", description: "Custom websites using React, Node.js, and MongoDB." },
  { title: "Support & Maintenance", description: "Ongoing support for Shopify, WordPress, and more." }
];

const Services = () => {
  return (
    <Box p={6} minH="100vh">
      <Heading textAlign="center" mb={8}>Our Services</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Services;
