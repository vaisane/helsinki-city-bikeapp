import Journey from "../models/journey.js";

export const getAllJourneys = async (page, limit) => {
  const [journeys, totalItems] = await Promise.all([
    Journey.find()
      .limit(limit)
      .skip(page * limit),
    Journey.count({}),
  ]);
  return { result: journeys, totalPages: Math.ceil(totalItems / limit) };
};

export const countStartingJourneys = async (stationId) => {
  const result = await Journey.count({ "Departure station id": stationId });
  if (!stationId) {
    throw new Error("Bad request");
  }
  return result;
};

export const countReturningJourneys = async (stationId) => {
  const result = await Journey.count({ "Return station id": stationId });
  if (!stationId) {
    throw new Error("Bad request");
  }
  return result;
};

export const journeySearchReturning = async (page, limit, searchText) => {
  const [journeys, totalItems] = await Promise.all([
    Journey.find({
      "Return station name": { $regex: `${searchText}`, $options: "i" },
    })
      .limit(limit)
      .skip(page * limit),
    Journey.count({
      "Return station name": { $regex: `${searchText}`, $options: "i" },
    }),
  ]);
  return { result: journeys, totalPages: Math.ceil(totalItems / limit) };
};

export const journeySearchDeparture = async (page, limit, searchText) => {
  const [journeys, totalItems] = await Promise.all([
    Journey.find({
      "Departure station name": { $regex: `${searchText}`, $options: "i" },
    })
      .limit(limit)
      .skip(page * limit),
    Journey.count({
      "Departure station name": { $regex: `${searchText}`, $options: "i" },
    }),
  ]);
  return { result: journeys, totalPages: Math.ceil(totalItems / limit) };
};
