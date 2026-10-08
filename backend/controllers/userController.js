import User from "../models/User.js";

export const findNearbyDonors = async (req, res) => {
  try {
    const { bloodGroup, latitude, longitude, radius } = req.body;

    if (!bloodGroup || latitude == null || longitude == null || !radius) {
      return res.status(400).json({
        message: "Blood group, location, and radius are required",
      });
    }

    const donors = await User.find({
      _id: { $ne: req.user._id },
      bloodGroup,
      isDonor: true,
      isAvailable: true,
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: radius * 1000,
        },
      },
    }).select("name phone bloodGroup city isAvailable");

    res.json(donors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateDonorStatus = async (req, res) => {
  try {
    const { isDonor, isAvailable } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        isDonor,
        isAvailable,
      },
      {
        new: true,
      },
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
