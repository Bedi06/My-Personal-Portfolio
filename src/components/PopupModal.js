import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "200px",
    height: "100px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: Theme.palette.secondary.light,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const PopupModal = ({ message }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "monospace",
            lineHeight: "1.1",
            paddingTop: "10px",
            color: Theme.palette.primary.main,
          }}
        >
          {message}
        </div>
      </Modal>
    </ThemeProvider>
  );
};

export default PopupModal;
