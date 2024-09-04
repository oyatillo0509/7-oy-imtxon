import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="flex container mx-auto">
      <div>
        <Nav></Nav>
      </div>
      <div>
        <Header/>
        <Hero />
        <Features />
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
