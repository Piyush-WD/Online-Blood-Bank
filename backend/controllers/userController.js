import User from "../models/User.js";

export const findNearbyDonors = async (req, res) => {
  try {
    const { bloodGroup, latitude, longitude, radius } = req.body;

    const donors = await User.find({
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
    });

    res.json(donors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateDonorStatus = async (req, res) => {
  try {
    const { userId, isDonor, isAvailable } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      {
        isDonor,
        isAvailable,
      },
      {
        new: true,
      },
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
