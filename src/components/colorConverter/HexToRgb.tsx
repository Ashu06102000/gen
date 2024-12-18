import { useEffect, useState } from "react";
import BackButton from "../BackButton";

const HexToRgb = () => {
  const [rgb, setRgb] = useState("255, 255, 255");
  const [error, setError] = useState("");
  const [hexColor, setHexColor] = useState("#ffffff");
  const [copied, setCopied] = useState<boolean>(false);

  const hexToRgb = (hex: string) => {
    if (!hex) {
      return setError("");
    }
    setHexColor(hex);

    let formattedHex = hex.trim();
    if (!formattedHex.startsWith("#")) {
      formattedHex = "#" + formattedHex;
    }

    const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(formattedHex);
    if (!isValidHex) {
      setError("Invalid hex color format. Use #RRGGBB or #RGB.");
      setRgb("");
      return;
    }
    setHexColor(formattedHex);
    setError("");

    const bigint = parseInt(formattedHex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    setRgb(`${r}, ${g}, ${b}`);
  };
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);
  return (
    <div className="flex flex-col w-full max-w-screen-2xl mx-auto gap-10 justify-center p-4">
      <BackButton text="HEX TO RGB CONVERTER" />
      <div className="h-full w-full flex justify-center items-center flex-col gap-8">
        <div className="flex flex-col gap-2 justify-center">
          <input
            className="border-gray-600 border rounded-sm p-4 text-black w-96"
            onChange={(e) => hexToRgb(e.target.value)}
            type="text"
            name="hextorgb"
            placeholder="HEX TO RGB"
            value={hexColor}
          />
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-between">
            <p className="text-black">Input: {hexColor}</p>
            <p className="text-black">Output: rgb({rgb})</p>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(`rbg(${rgb})`);
              setCopied(true);
            }}
            className="border mt-4 text-center cursor-pointer border-gray-600 p-4 uppercase text-gray-600 transition-all duration-400 ease-in hover:text-gray-500 hover:border-gray-500"
          >
            {copied ? "Copied!" : "Copy rgb code"}
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default HexToRgb;
