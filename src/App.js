import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import OptionPage from "./components/OptionPage/OptionPage";
import SubOptionPage from "./components/SubOptionPage/SubOptionPage";
import Footer from "./components/Footer/Footer";
import SecondaryContent from "./components/SecondaryContent/SecondaryContent";
import Cards from "./components/Cards/Cards";

import navOptions from "./data/navOptions";

import "./App.css";

function App() {
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainContent />} />
          {generateRoutes(navOptions)}
        </Routes>

        {isMainPage && (
          <>
            <SecondaryContent />
            <Cards />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

const generateRoutes = (options) => {
  return options.map((option, index) => {
    const { path, subOptions, label, header, description } = option;

    return (
      <Route
        key={index}
        path={path}
        element={<OptionPage label={label} header={header} description={description} subOptions={subOptions} />}
      >
        {subOptions &&
          subOptions.map((subOption, subIndex) => (
            <Route
              key={subIndex}
              path={subOption.path.replace(`${path}/`, "")}
              element={
                <SubOptionPage label={subOption.label} header={subOption.header} description={subOption.description} />
              }
            />
          ))}
      </Route>
    );
  });
};

export default App;
