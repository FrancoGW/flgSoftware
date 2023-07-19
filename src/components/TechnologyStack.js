import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";

const TechnologyStack = () => {
  const technologies = [
    { name: "ReactJS", imageSrc: "/assets/img/icons/react.png" },
    { name: "JavaScript", imageSrc: "/assets/img/icons/js.png" },
    { name: "Node Js", imageSrc: "/assets/img/icons/node.png" },
    { name: "Mongo DB", imageSrc: "/assets/img/icons/mongo.png" },
    { name: "Wordpress", imageSrc: "/assets/img/icons/wp.png" },
    { name: "next", imageSrc: "/assets/img/icons/next.png" },
    { name: "html", imageSrc: "/assets/img/icons/html.png" },
    { name: "css", imageSrc: "/assets/img/icons/css.png" },
    { name: "sass", imageSrc: "/assets/img/icons/sass.png" },
    // Agrega más tecnologías aquí...
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Flex direction="column" color="#0283D2" fontSize="2rem" align='center' >
      <Heading fontSize={{base:'2.5rem',md:'3rem'}} align="center" marginBottom={{base:'2rem'}}>Technologies we work with</Heading>
      <Box display="flex" justifyContent="center" marginBottom={{base:'2rem'}} gap="1.5rem" flexWrap='wrap' alignItems="center" minH="400px">
        {technologies.map((tech, index) => (
          <Box
            key={index}
            position="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            cursor="pointer"
          >
            <Image
              src={tech.imageSrc}
              alt={tech.name}
              boxSize="90px"
              objectFit="contain"
              mx={2}
              filter={hoveredIndex === index ? "grayscale(100%)" : "none"}
              transition="filter 0.3s"
            />
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default TechnologyStack;
