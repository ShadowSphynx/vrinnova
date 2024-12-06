import React from "react";
import "./SecondaryContent.css";
import Background from "../Background/Background";

function SecondaryContent() {
  return (
    <Background className="home-hero">
      <div className="bg-white py-5 sm:py-5">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-xl leading-8 mt-10">Over 10 Years Of Experience</h2>
          <h1 className="text-center leading-9 text-4xl tracking-wide font-semibold mt-10">
            Vrinnova is a leading company in the field of providing IT solutions, products, and services.
          </h1>
          <p className="text-center mt-10 sm:text-xl/relaxed">
            We have successfully provided and implemented a range of product, service, solution, and system integration
            packages for large customers in a variety of industries, including banking, retail chains, manufacturing,
            logistics, and domestic and international enterprises...
          </p>
        </div>
      </div>
    </Background>
  );
}

export default SecondaryContent;
