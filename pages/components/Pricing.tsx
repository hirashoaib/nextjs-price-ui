import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CheckIcon } from "../../icons/Icons";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="5" {...rest} alignItems="start">
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};
const Pricing = () => {
  return (
    <Box mx="6">
      <Box
        maxW="994px"
        margin="auto"
        mt="-256px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#A8D0E6" p="60px">
            <Text fontSize="2xl" fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={["5xl", "5xl", "6xl"]}>
              $329
            </Heading>
            <Text color="#171923" fontSize="lg" fontWeight="medium" mt="2">
              billed just once
            </Text>
            <Button bg="#F8E981" size="lg" w="282px" mt="6">
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize="lg" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="5" pt="6">
              <ListItem> International calling and messaging API</ListItem>
              <ListItem> Additional phone numbers</ListItem>
              <ListItem> Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default Pricing;
