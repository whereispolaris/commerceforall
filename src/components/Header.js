import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Spacer, Button, IconButton, Collapse, VStack, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure(); // Controls menu state

  return (
    <Box bg="gray.900" px={6} py={4} color="white" position="sticky" top={0} zIndex={10}>
      <Flex align="center">
        {/* Logo / Title */}
        <Heading size="md">Commerce For All</Heading>

        <Spacer />

        {/* Desktop Navigation (Hidden on mobile) */}
        <Flex gap={4} display={{ base: "none", md: "flex" }}>
          <Button as={Link} to="/" variant="link" color="white">Home</Button>
          <Button as={Link} to="/services" variant="link" color="white">Services</Button>
          <Button as={Link} to="/about" variant="link" color="white">About</Button>
          <Button as={Link} to="/contact" variant="link" color="white">Contact</Button>
        </Flex>

        {/* Mobile Menu Button (Hamburger) */}
        <IconButton
          aria-label="Open Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          color="white"
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
        />
      </Flex>

      {/* Mobile Navigation (Collapsible) */}
      <Collapse in={isOpen} animateOpacity>
        <VStack bg="gray.800" p={4} spacing={4} display={{ base: "flex", md: "none" }}>
          <Button as={Link} to="/" variant="ghost" color="white" onClick={onToggle}>Home</Button>
          <Button as={Link} to="/services" variant="ghost" color="white" onClick={onToggle}>Services</Button>
          <Button as={Link} to="/about" variant="ghost" color="white" onClick={onToggle}>About</Button>
          <Button as={Link} to="/contact" variant="ghost" color="white" onClick={onToggle}>Contact</Button>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Header;
