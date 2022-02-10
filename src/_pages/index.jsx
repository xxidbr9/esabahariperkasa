import React from "react";
import Home from "../Layout/Home";
import Head from 'react-helmet'
import Favicon from '../assets/favicon.ico'

const IndexPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Java TIrta Maritim</title>
        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
        <link rel="icon" href={Favicon} type="image/x-icon" />
      </Head>
      <Home />
    </React.Fragment>
  );
};

export default IndexPage;
