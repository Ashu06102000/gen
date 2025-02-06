import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-2xl p-4 border-b-gray-300 border-b-[0.5px]">
      <Link to="/">
        <img src="src/assets/Rator-logo.svg" alt="" />
      </Link>
    </header>
  );
};

export default Navbar;
