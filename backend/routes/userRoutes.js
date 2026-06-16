import express from "express";
import {
  findNearbyDonors,
  updateDonorStatus,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/find-nearby", findNearbyDonors);

router.put("/update-donor-status", updateDonorStatus);

export default router;
