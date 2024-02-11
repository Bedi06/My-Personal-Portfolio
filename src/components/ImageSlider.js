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
          style={{ width: "65vh", height: "auto", borderRadius: "1em" }}
        />
      </Box>
    );
  }

  return (
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
        <img
          key={index}
          src={imageUrl}
          alt={`slide ${index + 1}`}
          style={{ width: "60vh", height: "auto", borderRadius: "2em" }}
        />
      ))}
    </Carousel>
  );
};

export default ImageSlider;
