import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/system";

const ImageSlider = ({ images }) => {
  if (images.length === 1) {
    return (
      <Box>
        <img
          src={images[0]}
          alt="slide 1"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    );
  }

  return (
    <Carousel animation="slide">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`slide ${index + 1}`}
          style={{ width: "100%", height: "auto" }}
        />
      ))}
    </Carousel>
  );
};

export default ImageSlider;
