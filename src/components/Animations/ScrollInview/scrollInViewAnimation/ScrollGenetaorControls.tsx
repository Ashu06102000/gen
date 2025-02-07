const ScrollGenetatorControls = ({
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
}: {
  opacityFrom: number;
  opacityTo: number;
  scaleFrom: number;
  scaleTo: number;
  entry: number;
  cover: number;
  setCover: (value: number) => void;
  setScaleTo: (value: number) => void;
  setOpacityFrom: (value: number) => void;
  setOpacityTo: (value: number) => void;
  setScaleFrom: (value: number) => void;
  setEntry: (value: number) => void;
}) => {
  return (
    <>
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
    </>
  );
};
export default ScrollGenetatorControls;
