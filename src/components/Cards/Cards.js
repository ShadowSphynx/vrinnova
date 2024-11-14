import React from "react";
import { MantineProvider } from "@mantine/core";
import FlipCard from "./FlipCard.js";
import "./Cards.css";

function Card() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="card-grid">
        <FlipCard
          image="https://lp.com.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fderjssgq9%2Fimage%2Fupload%2Fv1693208949%2Fdownload_6_svy5oe.webp&w=640&q=75"
          header="SERVICE"
          details="Service details"
        />
        <FlipCard
          image="https://lp.com.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fderjssgq9%2Fimage%2Fupload%2Fv1693208949%2Fdownload_6_svy5oe.webp&w=640&q=75"
          header="CYBER SECURITY"
          details="Cyber security details"
        />
        <FlipCard
          image="https://lp.com.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fderjssgq9%2Fimage%2Fupload%2Fv1693208949%2Fdownload_6_svy5oe.webp&w=640&q=75"
          header="SYSTEM/CLOUD"
          details="System/Cloud details"
        />
        <FlipCard
          image="https://lp.com.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fderjssgq9%2Fimage%2Fupload%2Fv1693208949%2Fdownload_6_svy5oe.webp&w=640&q=75"
          header="NETWORK SYSTEM"
          details="Network system details"
        />
      </div>
    </MantineProvider>
  );
}

export default Card;
