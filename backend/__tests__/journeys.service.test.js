import { describe, beforeEach, afterEach, it, expect } from "@jest/globals";
import {
  getAllJourneys,
  countReturningJourneys,
  countStartingJourneys,
  journeySearchDeparture,
  journeySearchReturning,
} from "../services/journeys.js";
import mongoose from "mongoose";

describe("Journey services", () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  it("should return first 50 journeys from database", async () => {
    const journeys = await getAllJourneys(0, 50);
    expect(journeys).toHaveProperty("result");
    expect(journeys).toHaveProperty("totalItems");
    expect(typeof journeys["totalItems"]).toBe("number");
    expect(journeys["result"].length).toBe(50);
  }, 15000);

  it("it should return number of trips ending to station", async () => {
    const stationId = 123;
    const numberOfJourneys = await countReturningJourneys(stationId);
    expect(typeof numberOfJourneys).toBe("number");
    expect(numberOfJourneys).toBeGreaterThan(0);
  }, 15000);

  it("should return number of trips starting from station", async () => {
    const stationId = 50;
    const numberOfJourneys = await countStartingJourneys(stationId);
    expect(typeof numberOfJourneys).toBe("number");
    expect(numberOfJourneys).toBeGreaterThan(0);
  }, 15000);

  it("should return list of journeys where search string matches to departure station", async () => {
    const searchText = "laajalahden AUKIO";
    const journeys = await journeySearchDeparture(0, 25, searchText);
    expect(journeys).toHaveProperty("result");
    expect(journeys).toHaveProperty("totalItems");
    expect(journeys["result"]).toHaveLength(25);
    journeys["result"].forEach((journey) => {
      expect(journey["Departure station name"]).toBe("Laajalahden aukio");
    });
  }, 15000);

  it("should return list of journeys where search string matches to return station", async () => {
    const searchText = "Viiskul";
    const journeys = await journeySearchReturning(0, 25, searchText);
    expect(journeys).toHaveProperty("result");
    expect(journeys).toHaveProperty("totalItems");
    expect(journeys["result"]).toHaveLength(25);
    journeys["result"].forEach((journey) => {
      expect(journey["Return station name"]).toBe("Viiskulma");
    });
  }, 15000);
});
