import React, { useState } from "react";
import { Box, Input, Button, VStack, HStack, Text, Flex,  InputGroup, InputRightElement, } from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const Chatbox = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState("");
  
    const handleSendMessage = () => {
      if (!inputText.trim()) return; // Prevent sending empty messages
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInputText(""); // Clear input field
    };
  
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleSendMessage();
      }
    };
  
    return (
      <Flex direction="column" h="100vh" justify="flex-end">
        <Box w="950px" mx="auto" mb={4} p={4} bg="white">
          <VStack spacing={4} align="stretch">
            {messages.map((message) => (
              <Box
                key={message.id}
                bg={message.sender === "user" ? "blue.100" : "green.100"}
                p={3}
                borderRadius="lg"
                display="inline-block"
                maxWidth="100%"
                alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}
              >
                <Text>{message.text}</Text>
              </Box>
            ))}
          </VStack>
          <InputGroup mt={4}>
            <Input
              pr="4.5rem"
              placeholder="Type a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleSendMessage}>
                <IoIosSend /> {/* Using MdSend icon as the button content */}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>
    );
  };
  
export default Chatbox;