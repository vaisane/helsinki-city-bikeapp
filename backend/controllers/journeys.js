import {
  getAllJourneys,
  countReturningJourneys,
  countStartingJourneys,
  journeySearchDeparture,
  journeySearchReturning,
} from "../services/journeys.js";

export const getAllJourneysController = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;

  try {
    res.json(await getAllJourneys(page, limit));
  } catch (error) {
    console.log(error);
  }
};

export const countReturningJourneysController = async (req, res) => {
  const stationId = req.query.stationId;

  try {
    res.json(await countReturningJourneys(stationId));
  } catch (error) {
    console.log(error);
  }
};

export const countStartingJourneysController = async (req, res) => {
  const stationId = req.query.stationId;

  try {
    res.json(await countStartingJourneys(stationId));
  } catch (error) {
    console.log(error);
  }
};

export const searchJourneysByDepartureStation = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;
  const searchText = req.query.searchText || "";
  try {
    res.json(await journeySearchDeparture(page, limit, searchText));
  } catch (error) {
    console.log(error);
  }
};

export const searchJourneysByReturningStation = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;
  const searchText = req.query.searchText || "";

  try {
    res.json(await journeySearchReturning(page, limit, searchText));
  } catch (error) {
    console.log(error);
  }
};
