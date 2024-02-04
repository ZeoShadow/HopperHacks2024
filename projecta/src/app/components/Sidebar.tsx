import { Box, Flex, Text, VStack, Link, Icon, Spacer, Divider } from '@chakra-ui/react';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';
import { IoFastFoodSharp, IoChatboxEllipsesOutline } from "react-icons/io5";
const
 Sidebar = () => {
  return (
    <Box
      bg="blackAlpha.900"
      w="250px"
      minH="100vh"
      color="white"
      p={4}
      boxShadow="2xl"
    >
      <Flex direction="column" height="calc(100vh - 32px)"> {/* Adjust height as needed */}
        <VStack spacing={4} align="start">
          <Link display="flex" alignItems="center">
            <Icon as={IoChatboxEllipsesOutline} fontSize="xl" mr={2} />
            Chatbot
          </Link>
          <Link display="flex" alignItems="center">
            <Icon as={IoFastFoodSharp} fontSize="xl" mr={2} />
            Food
          </Link>
        </VStack>
        <Spacer />
        <VStack spacing={4} align="start">
          <Link display="flex" alignItems="center">
            <Icon as={FiSettings} fontSize="xl" mr={2} />
            Preferences
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
