// Importa los componentes necesarios de Next.js
import Head from "next/head";
import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
// Importa tus componentes personalizados
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyButton from "../components/MyButton";

import ProjectGallery from "@/components/ProjectGallery";
import WhatWeDo from "@/components/WhatWeDo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EndComponent from "@/components/EndComponent";
import TechnologyStack from "@/components/TechnologyStack";
import ScrollToTopButton from "@/components/ScrollToTopButton";
// Define tu componente de página principal
const Home = () => {
  return (
    <div>
      <Header />
      <Flex bg="#fff" minHeight="100vh"   justify="center" align="center">
        <Flex
          maxW="1300px"
          mx="auto"
          height="100vh"
          alignItems="center"
          justify="space-between"
          direction={{base:'column'}}
          gap={{base:'5rem'}}
        >
          <Flex
            justify="end"
            align="flex-start"
            p={8}
            color="#000"
            direction="column"
            padding={{base:'1rem' , md:'2rem'}}
            g
          >
            <Text
              fontSize={{base:"2.5rem", md:'4rem'}}
              fontWeight="bold"
              mb={4}
              textTransform="uppercase"
            >
              Make your ideas come true
            </Text>
            <MyButton text="talk to us" url="/contact" />
          </Flex>
          <Box flex="1">
            <Image
              src="/assets/img/imgMain.svg"
              alt="Imagen"
              objectFit="cover"
              maxW={{base:"350px",md:'700px'}}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex
        bg="#fff"
        minHeight="100vh"
        direction="column"
        justify="center"
        align="center"
      >
        <TechnologyStack/>
        <Heading
          color="#0283D2"
          fontSize="3rem"
          marginBottom="4rem"
          id="portfolio"
        >
          look at our work
        </Heading>
        <ProjectGallery />
        <Heading
          color="#0283D2"
          fontSize="3rem"
          marginBottom="4rem"
          marginTop="4rem"
          id="portfolio"
        >
          look what we do
        </Heading>
        <WhatWeDo />
      </Flex>
      <EndComponent />
      <ScrollToTopButton/>
      <Footer />
    </div>
  );
};

export default Home;
