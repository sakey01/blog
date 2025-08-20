import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 sm:top-10 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row justify-between items-center w-[95%] sm:w-[90%] px-4 sm:px-8 py-4 bg-stone-700 text-white shadow-md rounded-lg z-10">
      {/* Desktop/Mobile Header */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        <Link to="/">
          <h1 className="text-lg sm:text-[1.4rem] font-semibold">Blog Page</h1>
        </Link>

        {/* Mobile hamburger menu button */}
        <button
          className="sm:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-5 h-0.5 bg-white transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-white transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Navigation buttons */}
      <div
        className={`flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto mt-4 sm:mt-0 ${
          isMenuOpen ? "block" : "hidden sm:flex"
        }`}
      >
        <Link to="/sign-in">
          <button className="btn flex items-center text-nowrap bg-stone-800 hover:bg-stone-600 rounded-md px-4 py-2 sm: w-full justify-start">
            Sign In
          </button>
        </Link>
        <Link to="/create-post">
          <button className="btn flex items-center text-nowrap bg-stone-800 hover:bg-stone-600 rounded-md px-4 py-2 sm: w-full justify-start">
            Post
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
