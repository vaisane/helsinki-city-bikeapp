import { describe, it, expect } from "@jest/globals";
import request from "supertest";

const baseUrl = `${process.env.BASE_URL}:${process.env.PORT}`;

describe("Journeys endpoints", () => {
  it("/journeys GET", async () => {
    const response = await request(baseUrl).get("/journeys");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("result");
    expect(response.body).toHaveProperty("totalItems");
  }, 15000);

  it("/journeys/count-starting /GET", async () => {
    const response = await request(baseUrl)
      .get("/journeys/count-starting")
      .query({ stationId: 10 });
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeGreaterThan(0);
  }, 15000);

  it("/journeys/count-returning /GET", async () => {
    const response = await request(baseUrl)
      .get("/journeys/count-returning")
      .query({ stationId: 10 });
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeGreaterThan(0);
  }, 15000);

  it("/journeys/search-departure-station /GET", async () => {
    const response = await request(baseUrl)
      .get("/journeys/search-departure-station")
      .query({ searchText: "korkeasaari" });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("result");
    expect(response.body).toHaveProperty("totalItems");
  }, 15000);

  it("/journeys/search-return-station /GET", async () => {
    const response = await request(baseUrl)
      .get("/journeys/search-departure-station")
      .query({ searchText: "korkeasaari" });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("result");
    expect(response.body).toHaveProperty("totalItems");
  }, 15000);
});
