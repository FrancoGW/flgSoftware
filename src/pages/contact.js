import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Flex,
  Text,
  Icon,
  Link,
} from "@chakra-ui/react";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await axios.post("/api/contact", formData);
      console.log("Formulario enviado correctamente");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }

    setIsLoading(false);
  };

  const email = "lautarofrancogaray.unne@hotmail.com";

  const handleMailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Flex
        flex="1"
        justifyContent="center"
        alignItems="center"
        gap={{ base: "2rem" }}
        padding={{ base: "1rem" }}
        direction={{ base: "column",md:'row' }}
      >
        <Box
          maxWidth="500px"
          width="100%"
          mx="auto"
          borderRadius="20px"
          p={0}
          mt={6}
        >
          <Heading
            as="h2"
            fontSize={{ base: "2rem", md: "3.5rem" }}
            mb={6}
            color="#000"
          >
            Let's chat. <br />
            Tell me about your <br /> project.
          </Heading>
          <Text color="#000">Let's create something together 🤟</Text>
          <Box
            display="flex"
            alignItems="center"
            p={4}
            bg="#F2F2F2"
            borderRadius="10px"
            boxShadow="md"
            marginTop="1rem"
            padding="1rem"
          >
            <Icon
              as={AiOutlineMail}
              boxSize={30}
              color="#000"
              mr={2}
              display={{ base: "none" }}
            />
            <Flex
              alignItems="center"
              gap=".2rem"
              direction={{ base: "column", md:'row' }}
            >
              <Text color="#000" mr={2}>
                Mail me at
              </Text>
              <Link
                color="#2B6CB0"
                fontWeight="bold"
                onClick={handleMailClick}
                cursor="pointer"
              >
                {email}
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box
          maxWidth="500px"
          width="100%"
          mx="auto"
          borderRadius="20px"
          p={6}
          bg="white"
          boxShadow="md"
        >
          {isSubmitted ? (
            <Box textAlign="center">
              <Box fontSize="2xl" fontWeight="bold" mb={4}>
                Gracias por contactarnos
              </Box>
              <Box fontSize="lg">Nos pondremos en contacto a la brevedad.</Box>
            </Box>
          ) : (
            <form onSubmit={handleSubmit}>
              <Heading as="h2" fontSize="1.8rem" mb={6} color="#000">
                Send us a message 🚀
              </Heading>

              <FormControl mb={4} marginTop="1rem">
                <FormLabel color="#000" htmlFor="fullName"></FormLabel>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="FULL NAME"
                  required
                  width="100%"
                  bg="#F2F2F2"
                  border="1px solid #ddd"
                  _focus={{ outline: "none", boxShadow: "none" }}
                  color="#000"
                  borderRadius="10px"
                  padding=".5rem"
                  boxShadow="md"
                />
              </FormControl>
              <FormControl mb={4} marginTop="1rem">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="YOUR EMAIL"
                  required
                  width="100%"
                  bg="#F2F2F2"
                  border="1px solid #ddd"
                  _focus={{ outline: "none", boxShadow: "none" }}
                  color="#000"
                  borderRadius="10px"
                  padding=".5rem"
                  boxShadow="md"
                />
              </FormControl>
              <FormControl mb={4} marginTop="1rem">
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="MESSAGE"
                  rows={4}
                  required
                  width="100%"
                  bg="#F2F2F2"
                  border="1px solid #ddd"
                  _focus={{ outline: "none", boxShadow: "none" }}
                  color="#000"
                  borderRadius="10px"
                  padding=".5rem"
                  boxShadow="md"
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                width="100%"
                bg="#2B6CB0"
                color="white"
                _hover={{ bg: "#000", transition: "background 0.3s" }}
                borderRadius="10px"
                padding=".75rem"
                border="none"
                marginTop="1rem"
                isLoading={isLoading}
                loadingText="Enviando..."
              >
                Enviar
              </Button>
            </form>
          )}
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default ContactPage;
