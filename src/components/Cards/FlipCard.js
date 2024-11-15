import React from "react";
import { Image } from "@mantine/core";
import "./FlipCard.css";

function FlipCard({ image, header, details }) {
  return (
    <div className="mantine-Grid-col mantine-r">
      <div className="card-container">
        <div className="card-body">
          <div className="card-side side-back">
            <div className="container-fluid">
              <h2 className="text-center text-lg font-semibold leading-8 text-slate-50">{header}</h2>
              <div className="description">{details}</div>
              <a className="float-right" href={`/${header}`}>
                See more →
              </a>
            </div>
          </div>

          <div className="card-side side-front">
            <div className="container-fluid" style={{ height: "100%" }}>
              <div className="row" style={{ height: "100%" }}>
                <div className="relative col-xs-6" style={{ height: "100%" }}>
                  <Image
                    alt=""
                    src={image}
                    height={300}
                    width={300}
                    className="card-img bg-card bg-center bg-no-repeat"
                  />
                  <div className="centered-title">{header}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
