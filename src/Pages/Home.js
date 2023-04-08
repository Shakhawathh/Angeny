import React from "react";
import Footer from "../Components/Footer";
import Banner from "./Banner";
import Contact from "./Contact/Contact";
import Feature from "./Feature/Feature";
import Templatefroms from "./Templatefrom/Templatefroms";
import Template from "./TemplateSection/Template";

const Home = () => {
  return (
    <div>
      <Banner />
      <Template />
      <Feature />
      <Templatefroms />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
