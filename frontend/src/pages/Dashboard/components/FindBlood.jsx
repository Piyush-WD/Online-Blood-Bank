import React, { useState } from "react";
import axios from "axios";

const FindBlood = () => {
  console.log("FindBlood rendered");
  const [bloodGroup, setBloodGroup] = useState("");
  const [radius, setRadius] = useState(10);
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/users/find-nearby",
          {
            bloodGroup,

            radius,

            latitude: position.coords.latitude,

            longitude: position.coords.longitude,
          },
        );

        setResults(res.data);
      } catch (err) {
        console.log(err);
      }
    });
    const handleSearch = () => {
      alert("Clicked");
    };
  };
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center">Find Blood Donors</h2>

      <p className="mt-3 text-center text-gray-500">
        Search verified donors near your location.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {/* Blood Group */}

        <div>
          <label className="block mb-2 font-medium">Blood Group</label>

          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
        </div>

        {/* Radius */}

        <div>
          <label className="block mb-2 font-medium">Search Radius</label>

          <select
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
            className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value={5}>5 km</option>
            <option value={10}>10 km</option>
            <option value={25}>25 km</option>
            <option value={50}>50 km</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleSearch}
          className="px-8 py-3 bg-primary text-white rounded-xl shadow hover:opacity-90 transition"
        >
          Search Donors
        </button>
      </div>

      <div className="mt-10 space-y-4">
        {results.map((donor) => (
          <div key={donor._id} className="rounded-xl border p-5 shadow-sm">
            <h2 className="text-xl font-semibold">{donor.name}</h2>

            <p>🩸 {donor.bloodGroup}</p>

            <p>📞 {donor.phone}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">{/* Donor cards will appear here */}</div>
    </div>
  );
};

export default FindBlood;
