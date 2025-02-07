import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-8">
      <h1 className="text-6xl font-semibold text-black">TOOLS</h1>
      <div className="flex gap-4 items-center">
        <Link to={"/scoll-in-view-animation"}>
          <div className="border border-gray-600 p-4 uppercase text-gray-600 transition-all duration-400 ease-in hover:text-gray-500 hover:border-gray-500">
            Scoll in view css animation
          </div>
        </Link>
        <Link to={"/glassmorphism"}>
          <div className="border border-gray-600 p-4 uppercase text-gray-600 transition-all duration-400 ease-in hover:text-gray-500 hover:border-gray-500">
            glassmorphism
          </div>
        </Link>
        <Link to={"/scroll-triggered-text-reveal-generator"}>
          <div className="border border-gray-600 p-4 uppercase text-gray-600 transition-all duration-400 ease-in hover:text-gray-500 hover:border-gray-500">
            Scroll-triggered Text Reveal Generator
          </div>
        </Link>
        <Link to={"/hex-to-rgb"}>
          <div className="border border-gray-600 p-4 uppercase text-gray-600 transition-all duration-400 ease-in hover:text-gray-500 hover:border-gray-500">
            Hex to RGB
          </div>
        </Link>
        <Link to={"/rgb-to-hex"}>
          <div className="border border-gray-600 p-4 uppercase text-gray-600 transition-all duration-400 ease-in hover:text-gray-500 hover:border-gray-500">
            RGB to Hex
          </div>
        </Link>
        <Link to={"/typography-scale-generator"}>
          <div className="border border-gray-600 p-4 uppercase text-gray-600 transition-all duration-400 ease-in hover:text-gray-500 hover:border-gray-500">
            Typography scale generator
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
