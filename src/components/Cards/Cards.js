import React from "react";
import { MantineProvider } from "@mantine/core";
import FlipCard from "./FlipCard.js";
import "./Cards.css";

function Card() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="flex justify-center w-full">
        <div className="mantine-Grid-root w-3/4 mantine">
          <FlipCard
            image="https://lp.com.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fderjssgq9%2Fimage%2Fupload%2Fv1693208949%2Fdownload_6_svy5oe.webp&w=640&q=75"
            header="Testimonial 1"
            details="Service details"
          />
          <FlipCard
            image="https://lp.com.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fderjssgq9%2Fimage%2Fupload%2Fv1693208949%2Fdownload_6_svy5oe.webp&w=640&q=75"
            header="Testimonial 2"
            details="Cyber security details"
          />
          <FlipCard
            image="https://lp.com.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fderjssgq9%2Fimage%2Fupload%2Fv1693208949%2Fdownload_6_svy5oe.webp&w=640&q=75"
            header="Testimonial 3"
            details="System/Cloud details"
          />
          <FlipCard
            image="https://lp.com.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fderjssgq9%2Fimage%2Fupload%2Fv1693208949%2Fdownload_6_svy5oe.webp&w=640&q=75"
            header="Testimonial 4"
            details="Network system details"
          />
        </div>
      </div>
    </MantineProvider>
  );
}

export default Card;
