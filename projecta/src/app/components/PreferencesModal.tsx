// Modal.tsx
"use client";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreferencesModal: React.FC<PreferencesModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Preferences</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Your preferences content here */}
          <Text>Customize your preferences here.</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Save Changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default dynamic(() => Promise.resolve(PreferencesModal), { ssr: false });
