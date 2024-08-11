import React from "react";
import Tradingview from "./assets/tradingview.png";

function ButtonComponent({href,img,name}) {
  return (
    <div>
      <a
        href={href}
        className="button-container"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt={name} /> {name}
      </a>
    </div>
  );
}

export default ButtonComponent;
