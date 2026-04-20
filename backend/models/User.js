// models/User.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    bloodGroup: {
      type: String,
      required: true,
      enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    },

    // 📍 Location (IMPORTANT)
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
    },

    city: {
      type: String,
    },

    // 🧠 Role (set after registration)
    role: {
      type: String,
      enum: ["donor", "receiver"],
      default: null,
    },

    // 🩸 Donor-specific fields
    isAvailable: {
      type: Boolean,
      default: true,
    },

    lastDonationDate: {
      type: Date,
    },

    // 📞 Contact
    phone: {
      type: String,
    },

    // ⭐ Optional future feature
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

// 🔥 GEO INDEX (VERY IMPORTANT)
userSchema.index({ location: "2dsphere" });

export default mongoose.model("User", userSchema);
