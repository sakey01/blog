import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 sm:top-10 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row justify-between items-center w-[95%] sm:w-[90%] max-w-5xl px-4 sm:px-8 py-4 bg-stone-700 text-white shadow-md rounded-lg z-50">
      {/* Desktop/Mobile Header */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        <h1 className="text-lg sm:text-[1.4rem] font-semibold">
          <Link to="/">Blog</Link>
        </h1>

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
        <button className="btn flex items-center justify-center bg-stone-800 hover:bg-stone-600 rounded-md px-4 py-2 sm:py-4 text-sm sm:text-base transition-colors">
          <Link to="/sign-in" className="w-full text-center">
            Sign In
          </Link>
        </button>
        <button className="btn flex items-center justify-center bg-stone-800 hover:bg-stone-600 rounded-md px-4 py-2 sm:py-4 text-sm sm:text-base transition-colors">
          <Link to="/create-blog" className="w-full text-center">
            + Post
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
