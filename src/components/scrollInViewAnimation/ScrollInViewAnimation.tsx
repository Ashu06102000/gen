import { useEffect, useState } from "react";
import BackButton from "../BackButton";

const ScrollInViewAnimation = () => {
  const [opacityFrom, setOpacityFrom] = useState(0);
  const [opacityTo, setOpacityTo] = useState(1);
  const [scaleFrom, setScaleFrom] = useState(0.5);
  const [scaleTo, setScaleTo] = useState(1);
  const [entry, setEntry] = useState(0);
  const [cover, setCover] = useState(40);
  const [divCount, setDivCount] = useState(10);
  const [copied, setCopied] = useState<boolean>(false);

  const keyframes = `
    @keyframes fadeInAnimation {
      from {
        opacity: ${opacityFrom};
        transform: scale(${scaleFrom});
      }
      to {
        opacity: ${opacityTo};
        transform: scale(${scaleTo});
      }
    }
  `;

  const styles = `
    .animate-on-scroll {
      animation: fadeInAnimation linear;
      animation-timeline: view();
      animation-range: entry ${entry}% cover ${cover}%;
    }
  `;

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = keyframes + styles;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [opacityFrom, opacityTo, scaleFrom, scaleTo, entry, cover]);

  return (
    <div className="max-w-screen-2xl mx-auto my-4 overflow-scroll">
      <BackButton text="Scroll in View CSS Animation Generator" />

      <div className="grid grid-cols-3 mt-16 gap-6">
        <div className="p-4 rounded-sm flex flex-col gap-4">
          <h2 className="text-lg uppercase text-black">
            Adjust Animation Properties
          </h2>
          <div className="flex flex-col gap-2">
            <div className="">
              <label className="text-black text-sm font-light uppercase flex flex-col gap-2 p-5 border border-gray-300">
                Opacity (From): {opacityFrom}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={opacityFrom}
                  onChange={(e) => setOpacityFrom(parseFloat(e.target.value))}
                  className="w-full"
                />
              </label>
            </div>

            <div className="text-white">
              <label className="text-black text-sm font-light uppercase flex flex-col gap-2 p-5 border border-gray-300">
                Opacity (To): {opacityTo}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={opacityTo}
                  onChange={(e) => setOpacityTo(parseFloat(e.target.value))}
                  className="w-full"
                />
              </label>
            </div>

            <div className="text-white">
              <label className="text-black text-sm font-light uppercase flex flex-col gap-2 p-5 border border-gray-300">
                Scale (From): {scaleFrom}
                <input
                  type="range"
                  min="0.5"
                  max="1.5"
                  step="0.1"
                  value={scaleFrom}
                  onChange={(e) => setScaleFrom(parseFloat(e.target.value))}
                  className="w-full"
                />
              </label>
            </div>

            <div className="text-white">
              <label className="text-black text-sm font-light uppercase flex flex-col gap-2 p-5 border border-gray-300">
                Scale (To): {scaleTo}
                <input
                  type="range"
                  min="0.5"
                  max="1.5"
                  step="0.1"
                  value={scaleTo}
                  onChange={(e) => setScaleTo(parseFloat(e.target.value))}
                  className="w-full"
                />
              </label>
            </div>

            <div className="text-white">
              <label className="text-black text-sm font-light uppercase flex flex-col gap-2 p-5 border border-gray-300">
                Entry (%): {entry}
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={entry}
                  onChange={(e) => setEntry(parseInt(e.target.value) || 0)}
                  className="w-full border p-2 rounded text-black"
                />
              </label>
            </div>

            <div className="text-white">
              <label className="text-black text-sm font-light uppercase flex flex-col gap-2 p-5 border border-gray-300">
                Cover (%): {cover}
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={cover}
                  onChange={(e) => setCover(parseInt(e.target.value) || 0)}
                  className="w-full border p-2 rounded text-black"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 my-6 ">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-black font-light">
              Scroll to see the animation!
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setDivCount((prev) => Math.min(prev + 1, 50))}
                className="bg-white text-black px-4 py-2 rounded-sm shadow-md hover:border-gray-200 border border-gray-500 transition-all duration-400 ease-in"
              >
                Add Div
              </button>
              <button
                onClick={() => setDivCount((prev) => Math.max(prev - 1, 4))}
                className="bg-white text-black px-4 py-2 rounded-sm shadow-md hover:border-gray-200 border border-gray-500 transition-all duration-400 ease-in"
              >
                Remove Div
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-[70vh] py-56 px-10 overflow-scroll items-end">
            {Array.from({ length: divCount }).map((_, index) => (
              <div
                key={index}
                className="animate-on-scroll w-full h-full p-20 rounded-sm flex justify-center items-center shadow-lg text-black bg-gray-50 text-center border border-gray-500 transition-all duration-400 ease-in"
              >
                Animated Div {index + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="css-code flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-black uppercase">
            Generated CSS:
          </h2>
          <pre className="text-black bg-white border-gray-400 border p-4 rounded-md">
            {keyframes}
            {styles}
          </pre>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `${keyframes} 
                 ${styles}
              `
              );
              setCopied(true);
            }}
            className="border border-gray-600 p-4 uppercase text-gray-600 transition-all duration-400 ease-in hover:text-gray-500 hover:border-gray-500"
          >
            {copied ? "Copied!" : "Copy css"}
          </button>
          <p className="text-gray-700">
            NOTE: AFTER COPING ABOVE CSS, JUST ADD ABOVE CLASS TO THE CONTAINER
            WHICH YOU WANTED TO ANIMATE ON SCROLL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollInViewAnimation;
