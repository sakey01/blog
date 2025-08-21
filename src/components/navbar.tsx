import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, type User } from "firebase/auth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Track login/logout state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      {/* Glass container */}
      <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl shadow-black/20">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 via-transparent to-slate-700/10 rounded-2xl"></div>

        <div className="relative flex flex-col sm:flex-row justify-between px-6 py-4">
          {/* Header */}
          <div className="flex justify-between items-center w-full sm:w-auto mt-6 sm:mt-0 ">
            <Link to="/" className="group">
              <div className="flex items-center space-x-3">
                {/* Logo/Icon */}
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center group-hover: transition-transform duration-200">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-200">
                  Blog Page
                </h1>
              </div>
            </Link>

            {/* Mobile hamburger menu button */}
            <button
              className="sm:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {/* Menu to X */}
              <span
                className={`block w-4 h-0.5 bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-135 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-4 h-0.5 bg-white my-1 transform transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-4 h-0.5 bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-135 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>

          {/* Navigation buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-6 sm:mt-0 transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 max-h-40"
                : "opacity-0 max-h-0 sm:opacity-100 sm:max-h-none overflow-hidden sm:overflow-visible"
            }`}
          >
            <Link to="/sign-in" className="group">
              <button className="relative w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-700/60 hover:bg-slate-600/80 border border-slate-600/50 hover:border-slate-500/60 rounded-xl text-white font-medium transition-all duration-200 group-hover: group-hover:shadow-lg group-hover:shadow-blue-500/10">
                {/* User icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{user ? "Account" : "Sign In"}</span>
                {user && <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>}
              </button>
            </Link>

            <Link to="/create-post" className="group">
              <button className="relative w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border border-blue-500/20 rounded-xl text-white font-medium transition-all duration-200 group-hover: group-hover:shadow-lg group-hover:shadow-purple-500/25">
                {/* Plus icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span>Create Post</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>
    </nav>
  );
};

export default Navbar;
