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
        <style type="text/css">{`
      p {
            color: red;
            font-size: 50px;
        }
    `}</style>
      </Helmet>
      <Header />
      <p>This is a paragraph with red text and font size 50 px only in Home page.</p>
      <MainContent pageName="Home" designerName="Benbouali"    />
      
      <Footer />
    </>
  );
};

export default Home;
