import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
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

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Login Successful!");

      setLoading(false);

      navigate("/dashboard");
    } catch (err) {
      setLoading(false);

      alert(err.response?.data?.message || "Invalid Email or Password");
    }
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
              Welcome
              <br />
              Back
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Sign in to access BloodConnect.
            </p>

            {/* <div className="mt-10 space-y-5">
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
                <span>Help Save Lives</span>
              </div>
            </div> */}
          </div>

          {/* Right Section */}

          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white p-8">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-4xl shadow">
                  🔐
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center mt-5">Sign In</h2>

              <p className="text-center text-gray-500 mt-2 mb-8">
                Welcome back to BloodConnect
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder=" Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 p-3 bg-white outline-none focus:ring-2 focus:ring-primary"
                />

                <input
                  type="password"
                  name="password"
                  required
                  placeholder=" Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 p-3 bg-white outline-none focus:ring-2 focus:ring-primary"
                />

                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <a href="#" className="text-primary hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-primary text-white py-3 font-semibold shadow-md hover:opacity-90 transition disabled:opacity-70"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </form>

              <p className="text-center mt-6 text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary font-semibold hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
