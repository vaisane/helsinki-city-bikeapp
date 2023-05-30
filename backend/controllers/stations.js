import {
  getAllStations,
  stationSearch,
  getStationById,
} from "../services/stations.js";

export const getAllStationsController = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;

  try {
    res.json(await getAllStations(page, limit));
  } catch (error) {
    console.log(error);
  }
};

export const stationSearchController = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;
  const searchText = req.query.searchText || "";

  try {
    res.json(await stationSearch(page, limit, searchText));
  } catch (error) {
    console.log(error);
  }
};

export const getStationByIdController = async (req, res) => {
  const id = req.params.id;

  try {
    const station = await getStationById(id);
    res.json(station);
  } catch (error) {
    res.status(404).send("Station not found");
  }
};
