import { getAllStations, stationSearch } from "../services/stations.js";

export const getAllStationsController = async (req, res) => {
  const page = req.query.page - 1 || 0;
  const limit = req.query.limit || 25;

  try {
    res.json(await getAllStations(page, limit));
  } catch (error) {
    console.log(error);
  }
};

export const stationSearchController = async (req, res) => {
  const page = req.query.page - 1 || 0;
  const limit = req.query.limit || 25;
  const searchText = req.query.searchText || "";

  try {
    res.json(await stationSearch(page, limit, searchText));
  } catch (error) {
    console.log(error);
  }
};
