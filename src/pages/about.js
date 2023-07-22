import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box, Text, Image, Fade, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [isFadeIn, setIsFadeIn] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.innerHeight;
    const sectionPosition = document.getElementById("section2").offsetTop;

    if (scrollPosition >= sectionPosition) {
      setIsFadeIn(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <Box
        marginTop="2rem"
        direction="column"
        alignItems="center"
        justifyContent="center"
        id='section2'
      >
        <Flex bg="#fff" minHeight="100vh" justify="center"  align="center">
          <Flex
            maxW="1300px"
            mx="auto"
            height="100vh"
            alignItems="center"
            justify="space-between"
            direction={{base:'column',md:'row'}}
          >
            <Box flex="1">
              <Image
                src="/assets/img/logo3.png"
                alt="Imagen"
                objectFit="cover"
                maxW="700px"
              />
            </Box>
            <Flex
              justify="end"
              align="flex-start"
              p={8}
              color="#000"
              direction="column"
              padding="2rem"
            >
              <Text
                fontSize="1rem"
                mb={4}
               
              >
                At FLG Software, we transform ideas into powerful digital
                solutions. As experts in digital marketing and development, we
                are passionate about creating beautiful websites, intuitive web
                applications and digital marketing strategies that stand out in
                the online world. Our committed and creative team is ready to
                help you achieve your digital goals, always with a flexible and
                innovative approach. At FLG Software, we believe that your
                success is our success. If you have a project in mind, do not
                hesitate to contact us. We are ready to make your ideas come
                true in the digital world.
              </Text>
            </Flex>
          </Flex>
        </Flex>

       
       

       
      </Box>
      <Footer />
    </div>
  );
};

export default AboutPage;
