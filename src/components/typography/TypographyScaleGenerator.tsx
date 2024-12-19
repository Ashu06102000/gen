import React, { useState } from "react";
import BackButton from "../BackButton";

type ScaleItem = {
  label: string;
  value: number;
};

const ratios: ScaleItem[] = [
  { label: "Minor Second", value: 1.067 },
  { label: "Major Second", value: 1.125 },
  { label: "Minor Third", value: 1.2 },
  { label: "Major Third", value: 1.25 },
  { label: "Perfect Fourth", value: 1.333 },
  { label: "Golden Ratio", value: 1.618 },
];

const TypographyScaleGenerator: React.FC = () => {
  const [baseSize, setBaseSize] = useState<number>(16);
  const [selectedRatio, setSelectedRatio] = useState<number>(ratios[0].value);
  const [steps, setSteps] = useState<number>(5);

  const generateScale = (base: number, ratio: number, steps: number) => {
    const scale: number[] = [];
    for (let i = -steps; i <= steps; i++) {
      scale.push(Number((base * Math.pow(ratio, i)).toFixed(2)));
    }
    return scale;
  };

  const scale = generateScale(baseSize, selectedRatio, steps);

  return (
    <div className="max-w-screen-2xl mx-auto my-4">
      <BackButton text="Typography Scale Generator" />
      <div className="flex gap-8 justify-between mt-10">
        <div className="flex flex-col gap-4 p-6">
          <div className="">
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="base-size"
            >
              Base Font Size (px)
            </label>
            <input
              id="base-size"
              type="number"
              className="w-full px-3 py-2 border rounded text-black"
              value={baseSize}
              onChange={(e) => setBaseSize(Number(e.target.value))}
            />
          </div>

          <div className="">
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="ratio"
            >
              Ratio
            </label>
            <select
              id="ratio"
              className="w-full px-3 py-2 border rounded text-black"
              value={selectedRatio}
              onChange={(e) => setSelectedRatio(Number(e.target.value))}
            >
              {ratios.map((ratio) => (
                <option key={ratio.label} value={ratio.value}>
                  {ratio.label}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="steps"
            >
              Steps Above and Below Base
            </label>
            <input
              id="steps"
              type="number"
              className="w-full px-3 py-2 border rounded text-black"
              value={steps}
              onChange={(e) => setSteps(Number(e.target.value))}
            />
          </div>
        </div>
        <div className=" bg-white rounded-lg p-6 ">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl uppercase text-black font-semibold mb-2">
              Generated Scale
            </h2>
            <ul className="max-h-[70vh] max-w-screen-md overflow-scroll">
              {scale.map((size, index) => (
                <li key={index} className="text-black text-center">
                  <span
                    className="inline-block"
                    style={{ fontSize: `${size}px` }}
                  >
                    {size}px
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-xl uppercase text-black font-semibold p-6">
            CSS Output
          </h2>
          <textarea
            className="w-72 h-96 px-3 py-2 border rounded text-black"
            readOnly
            value={scale
              .map(
                (size, index) => `.font-size-${index} { font-size: ${size}px; }`
              )
              .join("\n")}
          />
        </div>
      </div>
    </div>
  );
};

export default TypographyScaleGenerator;
