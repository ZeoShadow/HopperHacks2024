'use client'
import { Box, Flex, VStack, Link, Icon, Spacer, useDisclosure } from '@chakra-ui/react';
import { FiSettings } from 'react-icons/fi';
import { IoChatboxEllipsesOutline, IoFastFoodSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import dynamic from "next/dynamic";
import PreferencesModal from './PreferencesModal'; // Import the PreferencesModal component

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          {/* Assuming you want to open the modal when clicking the Preferences link */}
          <Link display="flex" alignItems="center" onClick={onOpen}>
            <Icon as={FiSettings} fontSize="xl" mr={2} />
            Preferences
          </Link>
          <Link display="flex" alignItems="center">
            <Icon as={FaRegUser} fontSize="xl" mr={2} />
            User
          </Link>
        </VStack>          
      </Flex>

      {/* Preferences Modal */}
      <PreferencesModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default dynamic(() => Promise.resolve(Sidebar), { ssr: false });