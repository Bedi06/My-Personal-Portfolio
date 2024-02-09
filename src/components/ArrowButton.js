import React from "react";
import { styled } from "@mui/system";

const RootContainer = styled("div")({
  height: "100%",
  position: "absolute",
  top: 0,
  right: ({ right }) => (right ? 0 : "auto"),
  width: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 100,
  cursor: "pointer",
  transition: "opacity 300ms, background 300ms",
  opacity: ({ alwaysShowArrows, showArrows }) =>
    alwaysShowArrows || showArrows ? 1 : 0,
  background: ({ arrowsBgColor }) => arrowsBgColor,
  "&:hover": {
    background: ({ arrowsBgHoverColor }) => arrowsBgHoverColor,
  },
});

const ArrowIcon = styled("i")({
  position: "relative",
  display: "block",
  height: 50,
  "&::before": {
    position: "absolute",
    display: "block",
    content: "''",
    border: "15px solid transparent",
    right: ({ left }) => (left ? -5 : "auto"), // Adjusted left position
    borderRightColor: ({ left, arrowsColor }) => left && arrowsColor,
    left: ({ right }) => (right ? -5 : "auto"), // Adjusted right position
    borderLeftColor: ({ right, arrowsColor }) => right && arrowsColor,
  },
});

export const ARROW_RIGHT_TEST_ID = "arrow-right";
export const ARROW_LEFT_TEST_ID = "arrow-left";

function ArrowButton(props) {
  const { onButtonClick, right, left, CustomArrow } = props;

  if (!CustomArrow && !right && !left) {
    throw new Error("One of `right` or `left` props must be true");
  }

  return (
    <RootContainer
      data-testid={right ? ARROW_RIGHT_TEST_ID : ARROW_LEFT_TEST_ID}
      onClick={onButtonClick}
      right={right}
    >
      {CustomArrow ? CustomArrow() : <ArrowIcon left={left} />}
    </RootContainer>
  );
}

export default ArrowButton;
