import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box pb="28" as="section">
      <Box
        textAlign={["left", "left", "center"]}
        color="gray.200"
        bg="#24305E"
        pt="90px"
        pb="198px"
        px="8"
      >
        <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]}>
          Simple Pricing for your business
        </Heading>
        <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]} pt="4">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};
export default Header;
