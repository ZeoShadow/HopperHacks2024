// pages/index.tsx
'use client'

import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import Layout from './layout';

const Home = () => {
  return (
    <Layout>
        <Heading fontSize="4xl"> Welcome to My Chakra UI Next.js App </Heading>
       
    </Layout>
  );
};

export default Home;