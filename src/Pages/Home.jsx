import React from "react";
import Header from "../components/Header";
import SearchAndFilter from "../components/SearchAndFil";
import Main from "../components/Main";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchAndFilter />
      <Main />
    </div>
  );
};

export default Home;
