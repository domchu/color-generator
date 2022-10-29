import React, { useState, useEffect } from "react";
import rgbToHex from "../src/Utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  //* useEffect to clear the clipboard after 3secs

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  //* end of the useEffect
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight} %</p>
      <p className="color-value">{hexValue} </p>
      //* the clipboard code & click on the square box
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
