import { Box, IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      bottom="2rem"
      right="2rem"
      zIndex="100"
      transition="opacity 0.3s"
      opacity={showButton ? 1 : 0}
    >
      <IconButton
        aria-label="Scroll to top"
        icon={<FaArrowUp />}
        onClick={handleScrollToTop}
        size="lg"
        colorScheme="blue"
        borderRadius="full"
      />
    </Box>
  );
};

export default ScrollToTopButton;
