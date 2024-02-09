import React from "react";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/system";

const RootContainer = styled("div")({
  display: "flex",
  transitionProperty: "transform",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
});

const StyledImage = styled("img")({
  width: "100%",
});

const Image = (props) => {
  const { src, direction, currentImage } = props;
  if (!src) {
    throw new Error("Image src is required.");
  }

  return (
    <RootContainer key={currentImage}>
      <Slide in={true} direction={direction}>
        <StyledImage src={src} alt="" />
      </Slide>
    </RootContainer>
  );
};

export default Image;
