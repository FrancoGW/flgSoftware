import { Box, Flex, Image, Text } from "@chakra-ui/react";

const WhatWeDoSection = () => {
  const services = [
    {
      image: "/assets/img/service1.png",
      title: "STRATEGY",
      description:
        "We take care of finding the best method to increase your business",
    },
    {
      image: "/assets/img/service2.png",
      title: "MARKETING",
      description:
      "We look for the best way to promote your business or enterprise",
    },
    {
      image: "/assets/img/service3.png",
      title: "CUSTOM",
      description:
        "We are willing to work as necessary and always be aware so that your idea is totally as you dream it.",
    },
  ];

  return (
    <Box bg="#fff" py={10} minH="600px">
      <Flex
        maxW="1600px"
        mx="auto"
        justify="center"
        align="center"
        flexWrap="wrap"
        // gap="2rem"
      >
        {services.map((service, index) => (
          <Box key={index} p={4} width={{ base: "100%", sm: "50%", md: "33%" }}>
            <Box
              bg="rgba(255, 255, 255, 0.9)"
              borderRadius="md"
              overflow="hidden"
              transition="opacity 0.3s"
              _hover={{ opacity: 0.8 }}
            >
              <Image
                src={service.image}
                alt={`Service ${index + 1}`}
                maxH="350px"
                objectFit="cover"
              />
              <Box p={4} maxW="350px">
                <Text fontWeight="bold" fontSize="1.5rem" mb={2} color="#000" marginBottom='1rem'>
                  {service.title}
                </Text>
                <Text color="#000">{service.description}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default WhatWeDoSection;
