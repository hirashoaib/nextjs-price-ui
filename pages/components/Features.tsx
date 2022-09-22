import { HStack, Box, Text, Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { RiShieldStarLine } from "react-icons/ri";
import { BsTagsFill } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";

const Features = () => {
  return (
    <Box
      maxW="1024px"
      m={[null, null, null, "auto"]}
      px={["20px", "20px", "20px", "60px"]}
      py={["30px", "60px"]}
    >
      <Stack
        direction={["column", "column", "row"]}
        px={["20px", "60px"]}
        spacing={["5", "5", "10"]}
      >
        <HStack spacing="5">
          <RiShieldStarLine
            size={useBreakpointValue(["36px", "72px"])}
            color="#A8D0E6"
          />
          <Text
            fontSize={["md","lg"]}
            fontWeight="bold"
            textAlign="left"
            color="#374785"
          >
            30 days money back Guarantee
          </Text>
        </HStack>
        <HStack spacing="5">
          <BsTagsFill size={useBreakpointValue(["36px", "72px"])} color="#A8D0E6" />
          <Text
            fontSize={["md","lg"]}
            fontWeight="bold"
            textAlign="left"
            color="#374785"
          >
            No setup fees 100% hassle-free 
          </Text>
        </HStack>
        <HStack spacing="5">
          <VscDebugRestart size={useBreakpointValue(["36px", "72px"])} color="#A8D0E6" />
          <Text
            fontSize={["md","lg"]}
            fontWeight="bold"
            textAlign="left"
            color="#374785"
          >
            No monthly subscription. Pay once and for all
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};
export default Features;
