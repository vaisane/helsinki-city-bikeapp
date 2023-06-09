import { Router } from "express";
import {
  getAllJourneysController,
  countReturningJourneysController,
  countStartingJourneysController,
  searchJourneysByDepartureStation,
  searchJourneysByReturningStation,
} from "../controllers/journeys.js";

const router = Router();

router.get("/", getAllJourneysController);
router.get("/count-starting", countStartingJourneysController);
router.get("/count-returning", countReturningJourneysController);
router.get("/search-departure-station", searchJourneysByDepartureStation);
router.get("/search-return-station", searchJourneysByReturningStation);

export default router;
