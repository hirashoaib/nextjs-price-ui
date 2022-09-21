import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box pb="28" as="section">
      <Box
        
        color="#F7FAFC"
        bg="#6B46C1"
        pt="90px"
        pb="198px"
        px="8"
      >
        <Heading fontWeight="extrabold" fontSize="5xl">
          Simple Pricing for your business
        </Heading>
        <Text fontWeight="medium" fontSize="2xl" pt="4">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};
