import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center bg-accent">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          Save Lives with Every Drop ❤️
        </h1>

        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Connect with nearby blood donors instantly. Find or donate blood in
          emergencies with ease.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-primary text-white rounded-md shadow-md">
            Find Blood
          </button>
          <button className="px-6 py-3 bg-secondary text-white rounded-md shadow-md">
            Become Donor
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-card rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-lg">Real-time Search</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Find nearby donors instantly using location-based search.
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-lg">Emergency Requests</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Raise urgent blood requests and notify donors quickly.
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-lg">Safe & Reliable</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Verified donors and secure communication system.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold">Be a Hero Today 🩸</h2>
        <p className="mt-4 opacity-90">
          Your one donation can save multiple lives.
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-primary rounded-md shadow">
          Register as Donor
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © 2026 BloodConnect. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
