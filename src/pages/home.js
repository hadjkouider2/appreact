import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>HOME | Benbouali</title>
        <meta name="description" content="HOME portfolio of Benbouali" />
      </Helmet>
      <Header />
      <MainContent pageName="Home" designerName="Benbouali" />
      <Footer />
    </>
  );
};

export default Home;
