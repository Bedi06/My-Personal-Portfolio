import React, { useState } from "react";
import { styled } from "@mui/system"; // Import styled from @mui/system
import Image from "./assets/Image.js";
import ArrowButton from "./ArrowButton.js";

const RootContainer = styled("div")({
  position: "relative",
  width: 500,
  height: ({ fitToImageHeight }) => !fitToImageHeight && 500,
});

const WrapperContainer = styled("div")({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "100%",
});

const MuiImageSlider = (props) => {
  const { images, CustomArrow, onArrowClick, autoPlay } = props;
  if (!images || !images.length) {
    throw new Error("images prop is required and cannot be empty.");
  }

  let defaultOptions = {
    arrows: true,
    autoPlay: true,
    arrowsColor: "dimgrey",
    arrowsBgColor: "transparent",
    arrowsBgHoverColor: "#B9B9B95E",
    alwaysShowArrows: false,
    fitToImageHeight: false,
  };
  let options = Object.assign({}, defaultOptions, props);

  const { arrows } = options;

  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState("left");
  const [autoPlayTimeout, setAutoPlayTimeout] = useState();
  const [mouseOver, setMouseOver] = useState(false);

  const getNextImage = () => (currentImage + 1) % images.length;
  const getPrevImage = () => (currentImage ? currentImage : images.length) - 1;

  const handleNextImageClick = () => {
    setDirection("left");
    restartAutoPlay();
    let nextImage = getNextImage();
    setCurrentImage(nextImage);
    if (onArrowClick) {
      onArrowClick(nextImage);
    }
  };

  const handlePrevImageClick = () => {
    setDirection("right");
    restartAutoPlay();
    let prevImage = getPrevImage();
    setCurrentImage(prevImage);
    if (onArrowClick) {
      onArrowClick(prevImage);
    }
  };

  const restartAutoPlay = () => {
    clearTimeout(autoPlayTimeout);
    setAutoPlayTimeout(null);
  };

  if (autoPlay && !autoPlayTimeout) {
    let timeout = setTimeout(() => {
      setDirection("left");
      setCurrentImage(getNextImage());
      restartAutoPlay();
    }, 3000);

    setAutoPlayTimeout(timeout);
  }

  const showButtons = arrows && images.length > 1;

  return (
    <RootContainer
      fitToImageHeight={options.fitToImageHeight}
      onMouseOver={() => showButtons && setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <WrapperContainer>
        {showButtons && (
          <ArrowButton
            left
            {...options}
            showArrows={mouseOver}
            onButtonClick={handlePrevImageClick}
            CustomArrow={CustomArrow}
          />
        )}
        <Image
          currentImage={currentImage}
          src={images[currentImage]}
          direction={direction}
        />
        {showButtons && (
          <ArrowButton
            right
            {...options}
            showArrows={mouseOver}
            onButtonClick={handleNextImageClick}
            CustomArrow={CustomArrow}
          />
        )}
      </WrapperContainer>
    </RootContainer>
  );
};

export default MuiImageSlider;
