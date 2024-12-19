import { useEffect, useState } from "react";
import BackButton from "../BackButton";

function Glassmorphism() {
  const [blur, setBlur] = useState(10);
  const [transparency, setTransparency] = useState(0.6);
  const [borderRadius, setBorderRadius] = useState(15);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [boxShadow, setBoxShadow] = useState(true);
  const [copied, setCopied] = useState<boolean>(false);
  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };

  const glassStyle = {
    backdropFilter: `blur(${blur}px)`,
    background: `rgba(${hexToRgb(backgroundColor)}, ${transparency})`,
    borderRadius: `${borderRadius}px`,
    boxShadow: boxShadow ? "0px 4px 30px rgba(0, 0, 0, 0.1)" : "none",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    padding: "20px",
    color: "#000",
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
      <BackButton text="Glassmorphism Generator" />

      <div className="flex justify-between gap-4 w-full">
        <div className="controls flex flex-col gap-4 w-1/4">
          <label className="text-black text-sm font-light uppercase flex flex-col gap-2 p-5 border border-gray-300">
            Blur: {blur}px
            <input
              type="range"
              min="0"
              max="30"
              value={blur}
              onChange={(e) => setBlur(+e.target.value)}
            />
          </label>

          <label className="text-black text-sm font-light uppercase flex flex-col gap-2 p-5 border border-gray-300">
            Transparency: {transparency}
            <input
              type="range"
              step="0.1"
              min="0.1"
              max="1"
              value={transparency}
              onChange={(e) => setTransparency(+e.target.value)}
            />
          </label>

          <label className="text-black text-sm font-light uppercase flex flex-col gap-2 p-5 border border-gray-300">
            Border Radius: {borderRadius}px
            <input
              type="range"
              min="0"
              max="50"
              value={borderRadius}
              onChange={(e) => setBorderRadius(+e.target.value)}
            />
          </label>

          <label className="text-black text-sm font-light uppercase flex gap-2 p-5 border border-gray-300">
            Background Color:
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </label>

          <label className="text-black text-sm font-light uppercase flex gap-2 p-5 border border-gray-300">
            Box Shadow:
            <input
              type="checkbox"
              checked={boxShadow}
              onChange={(e) => setBoxShadow(e.target.checked)}
            />
          </label>
        </div>
        <div className="glass_output_wrapper p-8 w-full max-w-[500px] flex justify-center items-center ">
          <div className="output w-[450px] h-[500px]" style={glassStyle}></div>
        </div>

        <div className="css-code flex flex-col gap-2 w-1/3">
          <h2 className="text-2xl font-bold text-black uppercase">
            Generated CSS:
          </h2>
          <pre className="text-black bg-white border-gray-400 border p-4 rounded-md">
            {`backdrop-filter: blur(${blur}px);
background: rgba(${hexToRgb(backgroundColor)}, ${transparency});
border-radius: ${borderRadius}px;
box-shadow: ${boxShadow ? "0px 4px 30px rgba(0, 0, 0, 0.1)" : "none"};
border: 1px solid rgba(255, 255, 255, 0.18);`}
          </pre>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `backdrop-filter: blur(${blur}px);
background: rgba(${hexToRgb(backgroundColor)}, ${transparency});
border-radius: ${borderRadius}px;
box-shadow: ${boxShadow ? "0px 4px 30px rgba(0, 0, 0, 0.1)" : "none"};
border: 1px solid rgba(255, 255, 255, 0.18);`
              );
              setCopied(true);
            }}
            className="border border-gray-600 p-4 uppercase text-gray-600 transition-all duration-400 ease-in hover:text-gray-500 hover:border-gray-500"
          >
            {copied ? "Copied!" : "Copy css"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Glassmorphism;
