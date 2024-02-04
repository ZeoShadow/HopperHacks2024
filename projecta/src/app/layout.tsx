// app/layout.tsx
'use client'
import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Providers } from './providers';
import Sidebar from './components/Sidebar';
import ChatBox from './components/ChatBox'; // Import your ChatBox component with correct casing
import FoodUI from './components/FoodUI'; // Example additional component




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Flex h="100vh">
          <Sidebar /> {/* Sidebar component, assuming it handles its own width */}
          <Flex flex="1" justifyContent="center" alignItems="center">
            <ChatBox /> {/* ChatBox in the center */}
          </Flex>
        </Flex>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}