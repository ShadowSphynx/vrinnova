import React from "react";
import "./MainContent.css";
import background from "../../assets/background.jpg";

function MainContent() {
  return (
    <div className="main">
      <img alt="" className="bg-cover bg-center bg-no-repeat " src={background}></img>
      <div className="relative whitespace-normal mx-auto max-w-screen-xl px-4 py-52 sm:px-6 lg:flex lg:h-max lg:items-center lg:px-5">
        <div className="main-text whitespace-normal ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl whitespace-normal font-extrabold sm:text-3xl">
            AVAILABLE 24/7 FOR IT SUPPORT & MAINTENANCE
          </h1>
          <p className="mt-4 whitespace-normal max-w-lg sm:text-xl/relaxed">
            We provide round-the-clock support and maintenance services for computers, servers, and network devices,
            ensuring your systems are always up and running smoothly.
          </p>
          <div className="mt-8 whitespace-normal flex flex-wrap gap-4 text-center">
            <a
              href="/Solution"
              className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
            >
              Learn more
            </a>
            <a
              href="/contact"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-purple-600 shadow hover:blue-rose-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
