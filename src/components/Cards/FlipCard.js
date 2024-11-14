import React from "react";
import { Card, Text, Image } from "@mantine/core";
import "./FlipCard.css";

function FlipCard({ image, header, details }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <Card shadow="sm" radius="md" withBorder>
            <Image src={image} alt="Card Image" height={350} width={250} radius="md" />
            <div className="card-header">
              <Text weight={700} size="lg">
                {header}
              </Text>
            </div>
          </Card>
        </div>

        <div className="card-back">
          <Text className="card-title">{header}</Text>
          <Text className="card-description">{details}</Text>
          <button className="card-link" type="button">
            See more →
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
