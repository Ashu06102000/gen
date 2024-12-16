import React, { useState } from "react";

function ColorConverter() {
  const [hex, setHex] = useState("#ffffff");
  const [rgb, setRgb] = useState("255, 255, 255");
  const [error, setError] = useState("");

  const hexToRgb = (hex: string) => {
    const hexPattern = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;
    if (!hexPattern.test(hex)) {
      setError("Invalid HEX format");
      return;
    }
    setError("");
    let processedHex = hex.replace("#", "");
    if (processedHex.length === 3) {
      processedHex = processedHex
        .split("")
        .map((char) => char + char)
        .join("");
    }
    const r = parseInt(processedHex.substring(0, 2), 16);
    const g = parseInt(processedHex.substring(2, 4), 16);
    const b = parseInt(processedHex.substring(4, 6), 16);
    setRgb(`${r}, ${g}, ${b}`);
  };

  const rgbToHex = (rgb: string) => {
    const rgbPattern = /^(\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})$/;
    const match = rgb.match(rgbPattern);
    if (!match) {
      setError("Invalid RGB format");
      return;
    }
    setError("");
    const [_, r, g, b] = match;
    if ([r, g, b].some((value) => Number(value) < 0 || Number(value) > 255)) {
      setError("RGB values must be between 0 and 255");
      return;
    }
    const toHex = (num: number) => {
      const hex = num.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    };
    setHex(`#${toHex(Number(r))}${toHex(Number(g))}${toHex(Number(b))}`);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>HEX to RGB and RGB to HEX Converter</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ marginBottom: "20px" }}>
        <label>
          HEX:
          <input
            type="text"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            onBlur={() => hexToRgb(hex)}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <p>RGB: {rgb}</p>
      </div>
      <div>
        <label>
          RGB:
          <input
            type="text"
            value={rgb}
            onChange={(e) => setRgb(e.target.value)}
            onBlur={() => rgbToHex(rgb)}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <p>HEX: {hex}</p>
      </div>
    </div>
  );
}

export default ColorConverter;
