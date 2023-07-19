import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const EndComponent = () => {
  return (
    <Box bg="#0283D2" py={10} color="white" minH="400px">
      <Flex
        maxW="1300px"
        mx="auto"
        justify="center"
        align="center"
        flexDirection={{ base: "column", md: "row" }}
        height="400px"
        gap="3rem"
      >
        <Text
          fontWeight="bold"
          fontSize="1.5rem"
          mb={{ base: 4, md: 0 }}
          textAlign={{ base: "center", md: "left" }}
        >
          Ready to turn your ideas into code?
        </Text>
        <Box ml={{ base: 0, md: 4 }}>
          <Link href="/contact" passHref>
            <Button
              as="a"
              colorScheme="white"
              fontSize="1.5rem"
              border="2px solid"
              padding="1.5rem 3rem"
              transition="background-color 0.3s, color 0.3s"
              _hover={{
                bg: "white",
                color: "#0283D2",
                borderColor: "white",
              }}
            >
              Contact us
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default EndComponent;
