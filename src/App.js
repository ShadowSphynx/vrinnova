import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import SecondaryContent from "./components/SecondaryContent/SecondaryContent";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <MainContent />
      </div>
      <SecondaryContent />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
