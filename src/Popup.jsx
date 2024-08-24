import React from "react";
import "./App.css";

const Popup = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div style={popupStyles.overlay}>
      <div className="popupContent">
        <button onClick={onClose} style={popupStyles.closeButton}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const popupStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
 
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#ff5f5f",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    cursor: "pointer",
  },
};

export default Popup;
