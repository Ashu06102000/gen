import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";
import Colorpicker from "./components/color_picker/Colorpicker";
import Glassmorpisum from "./components/glassmorpisum/Glassmorpisum";
import "./App.css";
import HexToRgb from "./components/colorConverter/HexToRgb";
import RgbToHexConverter from "./components/colorConverter/RgbToHexConverter";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color-picker" element={<Colorpicker />} />
          <Route path="/glassmorphism" element={<Glassmorpisum />} />
          <Route path="/hex-to-rgb" element={<HexToRgb />} />
          <Route path="/rgb-to-hex" element={<RgbToHexConverter />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
