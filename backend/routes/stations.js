import { Router } from "express";
import {
  getAllStationsController,
  stationSearchController,
  getStationByIdController,
} from "../controllers/stations.js";
const router = Router();

router.get("/", getAllStationsController);
router.get("/:id", getStationByIdController);
router.get("/search", stationSearchController);

export default router;
