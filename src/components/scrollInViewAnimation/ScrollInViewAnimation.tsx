import { useEffect, useState } from "react";
import BackButton from "../BackButton";
import ScrollGenetatorControls from "./scrollGenetaorControls";
import ScrollGeneratorView from "./ScrollGeneratorView";

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
        <ScrollGenetatorControls
          {...{
            opacityFrom,
            opacityTo,
            scaleFrom,
            scaleTo,
            cover,
            entry,
            setCover,
            setScaleTo,
            setScaleFrom,
            setOpacityFrom,
            setOpacityTo,
            setEntry,
          }}
        />
        <ScrollGeneratorView setDivCount={setDivCount} divCount={divCount} />
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
