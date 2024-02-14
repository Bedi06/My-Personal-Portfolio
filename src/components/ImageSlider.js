import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const ImageSlider = ({ images }) => {
  return (
    <Paper elevation={3} sx={{ backgroundColor: "transparent" }}>
      {images.length === 1 ? (
        <div
          style={{
            position: "relative",
            backgroundColor: "transparent",
          }}
        >
          <img
            src={images[0]}
            alt="slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ) : (
        <Carousel
          animation="slide"
          interval={3500}
          autoPlay
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {images.map((imageUrl, index) => (
            <div
              key={index}
              style={{ position: "relative", backgroundColor: "transparent" }}
            >
              <img
                src={imageUrl}
                alt={`slide ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Carousel>
      )}
    </Paper>
  );
};

export default ImageSlider;
