'use client'

// You can define this interface at the top of your Sidebar component file
interface SidebarProps {
  setActiveUI: (ui: string) => void; // Assuming that setActiveUI takes a string argument and doesn't return anything
}

import { Box, Flex, VStack, Link, Icon, Spacer, useDisclosure } from '@chakra-ui/react';
import { FiSettings } from 'react-icons/fi';
import { IoChatboxEllipsesOutline, IoFastFoodSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import dynamic from "next/dynamic";
import PreferencesModal from './PreferencesModal'; // Import the PreferencesModal component

const Sidebar = ({ setActiveUI }: SidebarProps) => {
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
      <Flex direction="column" height="calc(100vh - 32px)">
        <VStack spacing={4} align="start">
          <Link display="flex" alignItems="center" onClick={() => setActiveUI('chatbot')}>
            <Icon as={IoChatboxEllipsesOutline} fontSize="xl" mr={2} />
            Chatbot
          </Link>
          <Link display="flex" alignItems="center" onClick={() => setActiveUI('food')}>
            <Icon as={IoFastFoodSharp} fontSize="xl" mr={2} />
            Food
          </Link>
        </VStack>
        <Spacer />
        <VStack spacing={4} align="start">
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

      <PreferencesModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default dynamic(() => Promise.resolve(Sidebar), { ssr: false });