import React from "react";
import "./MainContent.css";
import Background from "../Background/Background";

function MainContent() {
  return (
    <Background className="home-hero">
      <div className="main">
        <div className="relative whitespace-normal mx-auto max-w-screen-xl px-4 py-25 sm:px-6 lg:flex lg:h-max lg:items-center lg:px-5">
          <div className="main-text whitespace-normal ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl whitespace-normal font-extrabold md:text-3xl">
              Vrinnova as Your Trusted IT Partner and Elevate Your Business Today!
            </h1>
            <p className="mt-4 whitespace-normal max-w-lg sm:text-xl/relaxed">
              We provide round-the-clock support and maintenance services for computers, servers, and network devices,
              ensuring your systems are always up and running smoothly.
            </p>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default MainContent;
