import React, { useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const DonateBlood = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [isDonor, setIsDonor] = useState(storedUser?.isDonor || false);

  const [isAvailable, setIsAvailable] = useState(
    storedUser?.isAvailable || false,
  );

  const updateStatus = async (donorStatus, availableStatus) => {
    try {
      const res = await axios.put(`${API_URL}/api/users/update-donor-status`, {
        userId: storedUser._id,
        isDonor: donorStatus,
        isAvailable: availableStatus,
      });

      setIsDonor(res.data.isDonor);
      setIsAvailable(res.data.isAvailable);

      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
  };

  const stopDonating = () => {
    const confirmStop = window.confirm(
      "Are you sure you want to stop being a donor? You can always join again later.",
    );

    if (confirmStop) {
      updateStatus(false, false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="bg-white rounded-3xl shadow-lg border p-10">
        <h2 className="text-4xl font-bold text-center">❤️ Donor Status</h2>

        <p className="text-center text-gray-500 mt-3">
          Manage your availability for blood donation.
        </p>

        <div className="mt-10 border-t border-b py-10 text-center">
          {/* NOT A DONOR */}

          {!isDonor && (
            <>
              <div className="text-6xl">🔴</div>

              <h3 className="text-3xl font-bold mt-5">Not a Donor</h3>

              <p className="mt-4 text-gray-500">
                Become a donor and help save lives in your community.
              </p>

              <button
                onClick={() => updateStatus(true, true)}
                className="mt-8 px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition"
              >
                ❤️ Become a Donor
              </button>
            </>
          )}

          {/* AVAILABLE */}

          {isDonor && isAvailable && (
            <>
              <div className="text-6xl">🟢</div>

              <h3 className="text-3xl font-bold mt-5">
                Available for Donation
              </h3>

              <p className="mt-4 text-gray-500">
                Nearby patients can discover and contact you during emergencies.
              </p>

              <div className="flex justify-center gap-4 mt-8 flex-wrap">
                <button
                  onClick={() => updateStatus(true, false)}
                  className="px-7 py-3 bg-yellow-500 text-white rounded-xl font-semibold hover:bg-yellow-600 transition"
                >
                  Pause Donations
                </button>

                <button
                  onClick={stopDonating}
                  className="px-7 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition"
                >
                  Stop Donating
                </button>
              </div>
            </>
          )}

          {/* PAUSED */}

          {isDonor && !isAvailable && (
            <>
              <div className="text-6xl">🟡</div>

              <h3 className="text-3xl font-bold mt-5">Donation Paused</h3>

              <p className="mt-4 text-gray-500">
                Patients cannot discover you until you resume your availability.
              </p>

              <div className="flex justify-center gap-4 mt-8 flex-wrap">
                <button
                  onClick={() => updateStatus(true, true)}
                  className="px-7 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
                >
                  Resume Donations
                </button>

                <button
                  onClick={stopDonating}
                  className="px-7 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition"
                >
                  Stop Donating
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonateBlood;
