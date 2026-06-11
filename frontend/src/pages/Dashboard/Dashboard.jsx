import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import FindBlood from "./components/FindBlood";
import DonateBlood from "./components/DonateBlood";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("find");

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.name || "User";

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background pt-28 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Greeting */}

          <div className="mb-10">
            <h1 className="text-5xl font-bold">Hi, {userName} </h1>

            <p className="mt-3 text-gray-500 text-lg">
              What would you like to do today?
            </p>
          </div>

          {/* Main Card */}

          <div className="bg-white rounded-3xl shadow-xl p-8">
            {/* Toggle */}

            <div className="flex justify-center mb-10">
              <div className="flex bg-gray-100 rounded-2xl p-1">
                <button
                  onClick={() => setActiveTab("find")}
                  className={`px-8 py-3 rounded-xl font-semibold transition ${
                    activeTab === "find"
                      ? "bg-primary text-white"
                      : "text-gray-600"
                  }`}
                >
                  🩸 Find Blood
                </button>

                <button
                  onClick={() => setActiveTab("donate")}
                  className={`px-8 py-3 rounded-xl font-semibold transition ${
                    activeTab === "donate"
                      ? "bg-primary text-white"
                      : "text-gray-600"
                  }`}
                >
                  ❤️ Donate Blood
                </button>
              </div>
            </div>

            {/* Dynamic Component */}

            {activeTab === "find" ? <FindBlood /> : <DonateBlood />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
