import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <h2 className="text-2xl p-4 border-b-gray-300 border-b-[0.5px] text-black">
          RATOR
        </h2>
      </Link>
    </header>
  );
};

export default Navbar;
