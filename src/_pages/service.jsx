import React from "react";
import ServiceLayout from '../Layout/Service'
import Head from 'react-helmet'
import Favicon from '../assets/favicon.ico'
const ServicePage = () => {
  return (
    <>
      <Head>
        <title>Services | Java TIrta Maritim</title>
        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
        <link rel="icon" href={Favicon} type="image/x-icon" />
      </Head>
      <ServiceLayout />
    </>
  );
};

export default ServicePage;
