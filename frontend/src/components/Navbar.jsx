import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();

    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const userName = user?.name;
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-border shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
          BloodConnect
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>

          <a
            href="#how-it-works"
            className="hover:text-primary transition-colors"
          >
            How it Works
          </a>

          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {token ? (
            <div
              className="flex items-center gap-3 hover:opacity-90 transition cursor-pointer relative"
              onClick={() => setShowMenu(!showMenu)}
            >
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {userName
                  ?.split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>

              {showMenu && (
                <div className="absolute top-14 right-0 w-52 bg-white rounded-lg shadow-lg border">
                  <div className="px-4 py-3 border-b">
                    <p className="font-semibold">{userName}</p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}

              <span className="font-medium text-gray-700">{userName}</span>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium hover:bg-gray-200 transition"
              >
                Sign In
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium shadow hover:opacity-90 transition"
              >
                Create Account
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
