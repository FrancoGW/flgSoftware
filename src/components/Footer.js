import { Box, Text, Link as ChakraLink, Flex, HStack, Icon, Img } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const newLocal = <NextLink href='/'>
    <Img src="/assets/img/logo3.png" alt="" width='200px' />
  </NextLink>;
  return (
    <Box as="footer" py={4} bg="#fff" color="white">
      <Box
        position="relative"
        bg="#fff"
        overflow="hidden"
        before={{
          content: '""',
          position: 'absolute',
          top: '-40px',
          left: '0',
          right: '0',
          height: '100px',
          background: '#3498db',
          clipPath: 'ellipse(100% 100% at 50% 0)',
        }}
      >
        <Flex maxW="1200px" mx="auto" justify="space-between" align="center" px={4} height="210px">
          <Flex width="200px">
            {newLocal}
          </Flex>
          <Flex width="800px" align="center" justify="center">
            {/* Menú de páginas */}
            <HStack spacing={4} fontSize="1.3rem" align="start" color="#000" flexDirection="column">
              <NextLink href="/" passHref>
                Home
              </NextLink>
              <NextLink href="#portfolio" passHref>
                portfolio
              </NextLink>
              <NextLink href="/about" passHref>
                About us
              </NextLink>
              <NextLink href="/contact" passHref>
                Contact
              </NextLink>
            </HStack>
          </Flex>
          <Flex width="200px">
            {/* Redes sociales */}
            <HStack spacing={2}>
              <Icon as={FaFacebook} boxSize={30} color="#000" />
              <Icon as={FaTwitter} boxSize={30} color="#000" />
              <Icon as={FaInstagram} boxSize={30} color="#000" />
            </HStack>
          </Flex>
        </Flex>
      </Box>
      <Text mt={4} height="40px" textAlign="center" fontSize="sm">
        &copy; 2023 Franco Garay | All Right Reserved
      </Text>
    </Box>
  );
};

export default Footer;
