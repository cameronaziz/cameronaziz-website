import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';

const Home = () => (
  <Layout>
    <meta property="og:title" content="Cameron Aziz" />
    <meta property="og:description" content="Web Engineer specializing in React, Typescript and GraphQL." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.cameronaziz.com" />
    <meta property="og:image" content="/image.jpeg" />
    <SEO />
    <Intro />
    {/* <Projects /> */}
    <Skills />
    <Contact />
  </Layout>
);

export default Home;
