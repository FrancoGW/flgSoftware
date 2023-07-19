import { Button, Icon } from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';

const MyButton = ({ text, url }) => {
  return (
    <Button
      as="a"
      href={url}
      colorScheme="blue"
      size="xl"
      px={8}
      py={4}
      fontWeight="bold"
      borderRadius="10px"
      bg='#0283D2'
      color="#fff"
      padding='.5rem'
      textTransform="uppercase"
      rightIcon={<Icon as={MdArrowForward} boxSize={10} />}
      _hover={{
        bg: '#3F3D56',
        transition:'all 300ms',
        boxShadow: 'xl',
        color:'#fff'
      }}
      _focus={{
        boxShadow: 'outline',
      }}
    >
      {text}
    </Button>
  );
};

export default MyButton;
