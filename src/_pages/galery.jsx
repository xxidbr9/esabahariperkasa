import React from "react";
import GaleryLayout from "../_Layout/Galery";
import { useStaticQuery, graphql } from 'gatsby'
import Head from 'react-helmet'
import Favicon from '../assets/favicon.ico'


const GaleryPage = () => {
  const { allFile: { edges } } = useStaticQuery(graphql`
  query allImage{
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          name
          extension
        }
      }
    }
  }`)


  return (
    <>
      <Head>
        <title>About US | Java TIrta Maritim</title>
        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
        <link rel="icon" href={Favicon} type="image/x-icon" />
      </Head>
      <GaleryLayout imageData={edges} />
    </>
  );
};

export default GaleryPage;
