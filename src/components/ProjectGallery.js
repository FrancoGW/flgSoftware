import { Box, Grid, Image, Text } from "@chakra-ui/react";

const ProjectGallery = () => {
  const projects = [
    {
      title: "Pase ticket",
      description: "Platform to sell tickets",
      image: "/assets/img/projects/QR.png",
      link: "https://paseticket.com/",
    },
    {
      title: "Lopez Hnos",
      description: "Business page",
      image: "/assets/img/projects/2.png",
      link: "https://www.lopezhnos.com.ar/",
    },
    {
      title: "Estancia Ibera",
      description: "Lodge Page",
      image: "/assets/img/projects/1.png",
      link: "https://www.estanciaibera.com/",
    },  
    {
      title: "Rincon Del Socorro",
      description: "Lodge Page",
      image: "/assets/img/projects/5.png",
      link: "hhttps://rincondelsocorro.com.ar/",
    },
    {
      title: "StuntArgentino",
      description: "E-Commerce",
      image: "/assets/img/projects/3.png",
      link: "https://stuntargentino1.com/",
    },
    {
      title: "Volta Bikes",
      description: "Business page",
      image: "/assets/img/projects/4.png",
      link: "https://voltabikes.com.ar/",
    },
  ];

  return (
    <Box width="100%" bg="#fff">
      <Box maxWidth="1600px" mx="auto" padding={4}>
        <Grid templateColumns={{base:"",md:"repeat(auto-fit, minmax(450px, 1fr))"}} gap={4}>
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <Box
                bg="white"
                borderRadius="md"
                overflow="hidden"
                position="relative"
                transition="opacity 0.3s"
                _hover={{
                  "& img": {
                    transform: "scale(1.1)",
                  },
                  "& .info": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width="100%"
                  height="100%"
                  borderRadius="md"
                  transition="transform 0.3s"
                  objectFit="cover"
                />
                <Box
                  className="info"
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  padding={4}
                  background="rgba(0, 0, 0, 0.7)"
                  color="white"
                  opacity={0}
                  transform="translateY(20%)"
                  transition="transform 0.3s, opacity 0.3s"
                >
                  <Text fontWeight="bold" fontSize="lg" mb={2}>
                    {project.title}
                  </Text>
                  <Text fontSize="sm">{project.description}</Text>
                </Box>
              </Box>
            </a>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectGallery;
