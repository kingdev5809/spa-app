import React from "react";
import Category from "../Components/Category";
import About from "./About";
import Header from "./Header";
import FootMenu from "./FootMenu";
import Testamonial from "./Testamonial";
import Contact from "./Contact";
import Footer from "./Footer";


function MainPage(props) {
  return (
    <div>
      <Header />
      <About />
      <FootMenu />
      <Category />
      <Testamonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainPage;
