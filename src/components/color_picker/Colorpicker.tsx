import { useState } from "react";
import ColorConverter from "./ColorConverter";

const Colorpicker = () => {
  const [image, setImage] = useState<any>(null);
  const [error, setError] = useState("");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const fileType = file.type.split("/")[0];
      if (fileType !== "image") {
        setError("Please select a valid image file");
        setImage(null);
        return;
      }

      setError("");
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          setImage(reader.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-between max-w-screen-2xl mx-auto p-4 h-full">
      <div>
        <div>color picker</div>
        <input type="color" name="" id="" />
      </div>
      <ColorConverter />
      <div className="w-2/3 flex flex-col gap-4 justify-center items-center">
        <div className="h-[500px] w-full">
          {error && <div className="text-red-500">{error}</div>}
          {image && (
            <div className="">
              {/* <h3>Selected Image:</h3> */}
              <img
                className="object-contain h-[500px] w-full"
                src={image}
                alt="Uploaded"
              />
            </div>
          )}
        </div>

        <input
          onChange={handleFileChange}
          accept="image/*"
          type="file"
          name="upload"
          className="border border-gray-600 p-4 uppercase text-gray-600 transition-all duration-400 ease-in hover:text-gray-500 hover:border-gray-500"
        />
      </div>
    </div>
  );
};

export default Colorpicker;
