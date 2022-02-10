import React from "react";
import AboutLayout from "../Layout/About";
import Head from 'react-helmet'
import Favicon from '../assets/favicon.ico'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About US | Java TIrta Maritim</title>
        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
        <link rel="icon" href={Favicon} type="image/x-icon" />
      </Head>
      <AboutLayout />
    </>
  );
};

export default AboutPage;
