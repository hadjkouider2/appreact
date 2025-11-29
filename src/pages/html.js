import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";

const Html = () => {
  return (
    <>
      <Helmet>
        <title>HTML | Benboualihk</title>
        <meta name="description" content="HTML portfolio of Benboualihk" />
      </Helmet>
      <Header />
      <MainContent pageName="HTML" designerName="Benboualihk" />
      <Footer />
    </>
  );
};

export default Html;
