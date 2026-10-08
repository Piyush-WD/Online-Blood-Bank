import express from "express";
import {
  findNearbyDonors,
  updateDonorStatus,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/find-nearby", protect, findNearbyDonors);

router.put("/update-donor-status", protect, updateDonorStatus);

export default router;
