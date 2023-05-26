import {
  getAllStations,
  stationSearch,
  getStationById,
} from "../services/stations.js";
import { describe, beforeEach, afterEach, it, expect } from "@jest/globals";
import mongoose from "mongoose";

describe("Station services", () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  it("should return first 25 stations from database", async () => {
    const stations = await getAllStations(0, 25);
    expect(stations).toHaveProperty("result");
    expect(stations).toHaveProperty("totalPages");
    expect(typeof stations["totalPages"]).toBe("number");
    expect(stations["result"]).toHaveLength(25);
  });

  it("should return stations matching search string", async () => {
    const query1 = "korkEAsaaR";
    const query2 = "abc123";

    const stations1 = await stationSearch(0, 25, query1);
    const stations2 = await stationSearch(0, 25, query2);

    expect(stations1).toHaveProperty("result");
    expect(stations1).toHaveProperty("totalPages");
    expect(stations1["result"].length).toBeGreaterThan(0);
    expect(stations2).toHaveProperty("result");
    expect(stations2).toHaveProperty("totalPages");
    expect(stations2["result"]).toHaveLength(0);
  });

  it("should return single station", async () => {
    const station = await getStationById(50);
    expect(station).toHaveLength(1);
    expect(station[0]).toHaveProperty("ID");
    expect(station[0]).toHaveProperty("Nimi");
    expect(station[0]).toHaveProperty("Osoite");
    expect(station[0]).toHaveProperty("Kaupunki");
  });
});
