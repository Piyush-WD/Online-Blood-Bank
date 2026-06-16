import React from "react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 via-white to-red-100 px-6">
      <div className="text-center max-w-xl">
        {/* Logo */}
        <div className="text-7xl mb-6 animate-pulse">🩸</div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900">BloodConnect</h1>

        {/* Subtitle */}
        <h2 className="mt-8 text-2xl font-semibold text-gray-800">
          Connecting you to our service...
        </h2>

        <p className="mt-4 text-lg text-gray-500 leading-relaxed">
          Please wait a few moments while we prepare everything for you.
        </p>

        <p className="mt-2 text-sm text-gray-400">
          The first visit may take a little longer while our server starts.
        </p>

        {/* Loading Animation */}
        <div className="flex justify-center mt-10 space-x-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>
          <div
            className="w-3 h-3 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
