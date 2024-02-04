// Sidebar.tsx
'use client'
import { Box, Flex, Text, VStack, Link, Icon, Heading, Divider } from '@chakra-ui/react';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <Box
      bg="teal.500"
      w="250px"
      minH="100vh"
      color="white"
      p={4}
      boxShadow="2xl"
    >
      <Heading fontSize="2xl" mb={4}>
        My App
      </Heading>
      <Divider borderColor="whiteAlpha.700" mb={4} />
      <VStack spacing={4} align="start">
        <Link display="flex" alignItems="center">
          <Icon as={FiHome} fontSize="xl" mr={2} />
          Home
        </Link>
        <Link display="flex" alignItems="center">
          <Icon as={FiUser} fontSize="xl" mr={2} />
          Profile
        </Link>
        <Link display="flex" alignItems="center">
          <Icon as={FiSettings} fontSize="xl" mr={2} />
          Settings
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;