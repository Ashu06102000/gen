import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BackButton = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-4 items-center">
      <Link className="text-black flex items-center gap-2" to="/">
        <FaArrowLeftLong color="black" /> Back
      </Link>

      <h1 className="text-2xl text-left font-bold text-black uppercase">
        {text}
      </h1>
    </div>
  );
};

export default BackButton;
