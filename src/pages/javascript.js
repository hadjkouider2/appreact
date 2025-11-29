import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";

const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>JAVASCRIPT | Hadj</title>
        <meta name="description" content="JAVASCRIPT portfolio of Hadj" />
      </Helmet>
      <Header />
      <MainContent pageName="JAVASCRIPT" designerName="Hadj" />
      <Footer />
    </>
  );
};

export default Javascript;
