import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";
import Glassmorpisum from "./components/glassmorpisum/Glassmorpisum";
import "./App.css";
import HexToRgb from "./components/colorConverter/HexToRgb";
import RgbToHexConverter from "./components/colorConverter/RgbToHexConverter";
import TypographyScaleGenerator from "./components/typography/TypographyScaleGenerator";
import ScrollInViewAnimation from "./components/Animations/ScrollInview/scrollInViewAnimation/ScrollInViewAnimation";
import ScrollTRiggeredTextRevealGenerator from "./components/Animations/ScrollInview/scrollTriggerTextReveal/ScrollTextRevealGenerator";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/glassmorphism" element={<Glassmorpisum />} />
          <Route path="/hex-to-rgb" element={<HexToRgb />} />
          <Route path="/rgb-to-hex" element={<RgbToHexConverter />} />
          <Route
            path="/typography-scale-generator"
            element={<TypographyScaleGenerator />}
          />
          <Route
            path="/scoll-in-view-animation"
            element={<ScrollInViewAnimation />}
          />
          <Route
            path="/scroll-triggered-text-reveal-generator"
            element={<ScrollTRiggeredTextRevealGenerator />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
