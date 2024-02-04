// pages/index.tsx
'use client'

import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import Layout from './layout';
import dynamic from "next/dynamic";



const Home = () => {
  return (
    <Layout>
        <Heading fontSize="4xl">  </Heading>
       
    </Layout>
  );
};

export default dynamic (() => Promise.resolve(Home), {ssr: false})
