import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import bloodGif from "../../assets/11688519.gif";

const Landing = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-accent">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Find Blood When You Need It.
              <br />
              Donate When You Can.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Connect with verified blood donors near you. Register once, search
              instantly, and become a donor whenever you're ready to save lives.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:scale-105 transition"
              >
                Create Account
              </Link>

              <Link
                to="/login"
                className="px-6 py-3 bg-card border border-border rounded-lg shadow hover:scale-105 transition"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <img src={bloodGif} alt="Blood Donation" className="w-100" />
          </div>
        </div>
      </section>

      {/* How it Works */}

      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">1️⃣</div>

              <h3 className="font-semibold text-xl">Register</h3>

              <p className="mt-3 text-muted-foreground">
                Create your account with your basic details.
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">2️⃣</div>

              <h3 className="font-semibold text-xl">Search Blood</h3>

              <p className="mt-3 text-muted-foreground">
                Search nearby donors based on blood group and location.
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">3️⃣</div>

              <h3 className="font-semibold text-xl">Become a Donor</h3>

              <p className="mt-3 text-muted-foreground">
                Whenever you're ready, join our donor network voluntarily.
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">4️⃣</div>

              <h3 className="font-semibold text-xl">Save Lives</h3>

              <p className="mt-3 text-muted-foreground">
                Help someone in need with just one donation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section id="about" className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why BloodConnect?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold">
                📍 Smart Location Search
              </h3>

              <p className="mt-4 text-muted-foreground">
                Find donors near your location using intelligent distance
                filtering.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold">⚡ Emergency Support</h3>

              <p className="mt-4 text-muted-foreground">
                Get quick access to donors during emergencies without lengthy
                procedures.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold">🔒 Safe & Verified</h3>

              <p className="mt-4 text-muted-foreground">
                Every donor is a registered user, ensuring a safer and more
                reliable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20 bg-primary text-center text-white">
        <h2 className="text-4xl font-bold">
          One Registration.
          <br />
          Unlimited Opportunities to Save Lives.
        </h2>

        <p className="mt-5 text-lg opacity-90">
          Join the community today and help make blood accessible when it is
          needed the most.
        </p>

        <Link
          to="/register"
          className="inline-block mt-8 px-7 py-3 bg-white text-primary rounded-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          Create Account
        </Link>
      </section>

      {/* Footer */}

      <footer className="py-8 text-center text-muted-foreground text-sm">
        <div className="flex justify-center gap-8 mb-4">
          <a href="#">Privacy Policy</a>
          <a href="#">FAQs</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
        </div>
        © 2026 BloodConnect. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;
