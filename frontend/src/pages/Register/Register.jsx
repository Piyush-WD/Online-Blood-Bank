import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!navigator.geolocation) {
      setLoading(false);
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const payload = {
            ...formData,
            location: {
              type: "Point",
              coordinates: [
                position.coords.longitude,
                position.coords.latitude,
              ],
            },
          };

          const res = await axios.post(
            "http://localhost:5000/api/auth/register",
            payload,
          );

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data._id);

          console.log(res.data);

          setLoading(false);

          navigate("/dashboard", { replace: true });
        } catch (err) {
          setLoading(false);

          alert(err.response?.data?.message || "Registration failed");
        }
      },
      () => {
        setLoading(false);
        alert("Please allow location access.");
      },
    );
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-red-100 pt-24 px-6 pb-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}

          <div className="hidden lg:flex flex-col justify-center">
            {/* <div className="text-7xl mb-6">🩸</div> */}

            <h1 className="text-6xl font-extrabold leading-tight text-gray-900">
              Find Blood.
              <br />
              Get Help.
              <br />
              Save Lives.
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Create your BloodConnect account to search nearby blood donors
              during emergencies. Whenever you're ready, you can also join our
              donor network and help save lives.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3 text-lg">
                🔍
                <span>Search Nearby Blood Donors</span>
              </div>

              <div className="flex items-center gap-3 text-lg">
                📍
                <span>Location-Based Matching</span>
              </div>

              <div className="flex items-center gap-3 text-lg">
                ❤️
                <span>Become a Donor Anytime</span>
              </div>
            </div>
          </div>

          {/* Right Section */}

          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white p-8">
              <div className="flex justify-center">
                {/* <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-4xl shadow">
                  🩸
                </div> */}
              </div>

              <h2 className="text-3xl font-bold text-center mt-5">
                Create Your Account
              </h2>

              <p className="text-center text-gray-500 mt-2 mb-8">
                Register once and access BloodConnect whenever you need it.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 p-3 bg-white outline-none focus:ring-2 focus:ring-red-400"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 p-3 bg-white outline-none focus:ring-2 focus:ring-red-400"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 p-3 bg-white outline-none focus:ring-2 focus:ring-red-400"
                />

                <select
                  name="bloodGroup"
                  required
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 p-3 bg-white outline-none focus:ring-2 focus:ring-red-400"
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

                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 p-3 bg-white outline-none focus:ring-2 focus:ring-red-400"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-primary text-white py-3 font-semibold shadow-md hover:opacity-90 transition duration-300 disabled:opacity-70"
                >
                  {loading ? "Fetching Location..." : "Create Account"}
                </button>
              </form>

              <p className="text-center mt-6 text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
