import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md border-b shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-primary">BloodConnect</h1>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary">
            Home
          </a>
          <a href="#" className="hover:text-primary">
            Find Donors
          </a>
          <a href="#" className="hover:text-primary">
            Donate
          </a>
          <a href="#" className="hover:text-primary">
            About
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-md bg-muted text-sm">
            Login
          </button>
          <button className="px-4 py-2 rounded-md bg-primary text-white text-sm shadow">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
