import React from "react";

const FindBlood = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold">Find Blood Donors</h2>

      <p className="mt-4 text-gray-500">
        Search verified donors near your location.
      </p>

      <button className="mt-8 px-8 py-3 bg-primary text-white rounded-xl">
        Search Donors
      </button>
    </div>
  );
};

export default FindBlood;
