import { useEffect, useState } from "react";

import BackButton from "../BackButton";

const RgbaToHexConverter = () => {
  const [rgba, setRgba] = useState("rgba(255, 255, 255, 1)");
  const [error, setError] = useState("");
  const [hexColor, setHexColor] = useState("#FFFFFF");
  const [copied, setCopied] = useState<boolean>(false);

  const rgbaToHex = (rgba: string) => {
    if (!rgba) {
      return setError("");
    }
    setRgba(rgba);
    const formattedRgba = rgba.trim();
    const rgbaRegex =
      /^rgba?\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3}),?\s?(0|0?\.\d+|1)?\)$/;
    const match = formattedRgba.match(rgbaRegex);

    if (!match) {
      setError(
        "Invalid RGBA format. Use 'rgba(R, G, B, A)' where R, G, B are 0-255, and A is 0-1."
      );
      setHexColor("");
      return;
    }

    const [_, r, g, b, a] = match.map(Number);

    if ([r, g, b, a].some((value) => value < 0 || value > 255)) {
      setError("RGB values must be between 0 and 255.");
      setHexColor("");
      return;
    }

    setError("");

    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
    setHexColor(hex);
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
      <BackButton text="RGBA TO HEX CONTERTER" />
      <div className="w-full flex justify-center items-center flex-col gap-8">
        <div className="flex flex-col gap-2 justify-center">
          <input
            className="border-gray-600 border rounded-sm p-4 text-black w-96"
            onChange={(e) => rgbaToHex(e.target.value)}
            type="text"
            name="rgbatohex"
            placeholder="RGBA TO HEX (e.g., rgba(255, 255, 255, 1))"
          />
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-between">
            <p className="text-black">Input: {rgba}</p>
            <p className="text-black">Output: {hexColor}</p>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(hexColor);
              setCopied(true);
            }}
            className="border mt-4 text-center cursor-pointer border-gray-600 p-4 uppercase text-gray-600 transition-all duration-400 ease-in hover:text-gray-500 hover:border-gray-500"
          >
            {copied ? "Copied!" : "Copy hex code"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RgbaToHexConverter;
