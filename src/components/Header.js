import { Box, Flex, Text, Img, Link, IconButton, useDisclosure, keyframes } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const handleLinkClick = (path) => {
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const scrollMarginTop = parseInt(window.getComputedStyle(element).scrollMarginTop) || 0;
        const offset = element.getBoundingClientRect().top - headerHeight - scrollMarginTop - 100;
        window.scrollTo({ top: window.pageYOffset + offset, behavior: 'smooth' });
      }
    } else {
      router.push(path);
      if (isOpen) {
        onToggle(); // Cerrar el menú al hacer clic en un enlace del menú
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slideInRight = keyframes`
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  `;

  return (
    <header>
      <Box
        as="nav"
        bg="#fff"
        py={4}
        position={isSticky ? 'fixed' : 'relative'}
        top={0}
        left={0}
        right={0}
        zIndex={isSticky ? '100' : 'auto'}
        transition="top 0.3s, box-shadow 0.3s, background-color 0.3s"
        boxShadow={isSticky ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none'}
      >
        <Flex
          maxW="1300px"
          mx="auto"
          justify="space-between"
          align="center"
          px={4}
          height="80px"
        >
          <Link onClick={() => handleLinkClick('/')} cursor="pointer">
            <Img height="80px" src="/assets/img/logo3.png" />
          </Link>
          <Flex>
            <Flex
              as="ul"
              listStyleType="none"
              gap="1rem"
              textTransform="uppercase"
              spacing={4}
              color="#000"
              paddingRight="1rem"
              display={{ base: 'none', md: 'flex' }}
            >
              <li>
                <Link
                  onClick={() => handleLinkClick('/')}
                  cursor="pointer"
                  fontSize="1.2rem"
                  _hover={{
                    color: '#2B6CB0',
                  }}
                  transition="color 0.3s"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick('#portfolio')}
                  cursor="pointer"
                  fontSize="1.2rem"
                  _hover={{
                    color: '#2B6CB0',
                  }}
                  transition="color 0.3s"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick('/about')}
                  cursor="pointer"
                  fontSize="1.2rem"
                  _hover={{
                    color: '#2B6CB0',
                  }}
                  transition="color 0.3s"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick('/contact')}
                  cursor="pointer"
                  fontSize="1.2rem"
                  _hover={{
                    color: '#2B6CB0',
                  }}
                  transition="color 0.3s"
                >
                  Contact
                </Link>
              </li>
            </Flex>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Menu"
              icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              colorScheme="blue"
              variant="ghost"
              size="md"
              onClick={onToggle}
              ml={4}
            />
          </Flex>
        </Flex>
        {isOpen && (
          <Flex
            as="ul"
            listStyleType="none"
            gap="1rem"
            textTransform="uppercase"
            spacing={4}
            color="#000"
            paddingRight="1rem"
            direction="column"
            alignItems="center"
            justifyContent='center'
            position="fixed"
            top="100px"
            right="0"
            bg="#fff"
            zIndex="99"
            overflowY="auto"
            height={`calc(100vh - 80px)`}
            animation={`${slideInRight} 0.3s`}
            width="100%"
          >
            <li>
              <Link
                onClick={() => {
                  handleLinkClick('/');
                  onToggle();
                }}
                cursor="pointer"
                fontSize="1.2rem"
                _hover={{
                  color: '#2B6CB0',
                }}
                transition="color 0.3s"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  handleLinkClick('#portfolio');
                  onToggle();
                }}
                cursor="pointer"
                fontSize="1.2rem"
                _hover={{
                  color: '#2B6CB0',
                }}
                transition="color 0.3s"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  handleLinkClick('/about');
                  onToggle();
                }}
                cursor="pointer"
                fontSize="1.2rem"
                _hover={{
                  color: '#2B6CB0',
                }}
                transition="color 0.3s"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  handleLinkClick('/contact');
                  onToggle();
                }}
                cursor="pointer"
                fontSize="1.2rem"
                _hover={{
                  color: '#2B6CB0',
                }}
                transition="color 0.3s"
              >
                Contact
              </Link>
            </li>
          </Flex>
        )}
      </Box>
    </header>
  );
};

export default Header;
