import { describe, it, expect, beforeEach, afterEach } from "@jest/globals";
import Journey from "../models/journey";
import mongoose from "mongoose";

const checkIsoTimeFormat = async (field) => {
  const invalidDocuments = await Journey.find({
    [field]: {
      $not: {
        $regex:
          "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?(?:Z|[+-]\\d{2}:\\d{2})?$",
      },
    },
  });
  return invalidDocuments;
};

describe("Tests for journey data integrity", () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  it("should pass if journeys departure times are in correct ISO date time format", async () => {
    const invalidDocuments = await checkIsoTimeFormat("Departure");
    expect(invalidDocuments).toHaveLength(0);
  }, 15000);

  it("should pass if journeys return times are in correct ISO date time format", async () => {
    const invalidDocuments = await checkIsoTimeFormat("Return");
    expect(invalidDocuments).toHaveLength(0);
  }, 15000);

  it("should pass if there aren't any trips with duration < 10 sec", async () => {
    const invalidDocuments = await Journey.find({
      "Duration (sec)": { $lt: 10 },
    });
    expect(invalidDocuments).toHaveLength(0);
  }, 15000);

  it("should pass if there aren't any trips with distance < 10m", async () => {
    const invalidDocuments = await Journey.find({
      "Distance covered (m)": { $lt: 10 },
    });
    expect(invalidDocuments).toHaveLength(0);
  });
});
