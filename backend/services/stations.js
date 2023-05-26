import Station from "../models/station.js";

export const getAllStations = async (page, limit) => {
  const [stations, totalItems] = await Promise.all([
    Station.find()
      .limit(limit)
      .skip(page * limit),
    Station.count({}),
  ]);

  return { result: stations, totalPages: Math.ceil(totalItems / limit) };
};

export const stationSearch = async (page, limit, searchText) => {
  const [stations, totalItems] = await Promise.all([
    Station.find({ Nimi: { $regex: `${searchText}`, $options: "i" } })
      .limit(limit)
      .skip(page * limit),
    Station.count({ Nimi: { $regex: `${searchText}`, $options: "i" } }),
  ]);

  return { result: stations, totalPages: Math.ceil(totalItems / limit) };
};

export const getStationById = async (stationId) => {
  const station = await Station.find({ ID: stationId });
  if (station.length == 0) {
    throw new Error("Station not found");
  } else {
    return station;
  }
};
