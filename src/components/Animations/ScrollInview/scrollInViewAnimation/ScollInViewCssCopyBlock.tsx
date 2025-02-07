const ScrollGeneratorView = ({
  keyframes,
  styles,
  copied,
  setCopied,
}: {
  keyframes: string;
  styles: string;
  copied: boolean;
  setCopied: (value: boolean) => void;
}) => {
  return (
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
  );
};
export default ScrollGeneratorView;
