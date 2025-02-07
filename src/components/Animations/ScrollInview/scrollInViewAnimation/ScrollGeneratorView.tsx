const ScrollGeneratorView = ({
  setDivCount,
  divCount,
}: {
  setDivCount: (value: number | ((prev: number) => number)) => void;
  divCount: number;
}) => {
  return (
    <div className="flex flex-col items-center gap-4 my-6 ">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl text-black font-light">
          Scroll to see the animation!
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => {
              const newCount = Math.min(divCount + 1, 50);
              setDivCount(newCount);
            }}
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
  );
};

export default ScrollGeneratorView;
