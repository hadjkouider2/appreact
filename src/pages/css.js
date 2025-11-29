import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";
const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS | Kouider</title>
        <meta name="description" content="CSS portfolio of Kouider" />
      </Helmet>
      <Header />
      <MainContent pageName="CSS" designerName="Kouider" />
      <Footer />
    </>
  );
};

export default Css;
