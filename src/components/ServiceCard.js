import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const ServiceCard = ({ title, description }) => {
  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="md" transition="0.3s" _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}>
      <Heading size="md" mb={2}>{title}</Heading>
      <Text color="gray.600">{description}</Text>
    </Box>
  );
};

export default ServiceCard;
