import { getAllStations, stationSearch } from "../services/stations.js"
import { describe, beforeEach, afterEach, it, expect} from "@jest/globals"
import mongoose from "mongoose"

describe("Station services", () => {
    beforeEach(async () => {
        await mongoose.connect(process.env.MONGODB_URI)
      })
      
    afterEach(async () => {
        await mongoose.connection.close()
    })
    
    it("should return first 25 stations", async () => {
        const stations = await getAllStations(0, 25)
        expect(stations).toHaveProperty("result")
        expect(stations).toHaveProperty("totalPages")
        expect(typeof stations["totalPages"]).toBe("number")
        expect(stations["result"].length).toBe(25)
    })

    it("should return stations matching search string", async () => {
        const query1 = "korkEAsaaR"
        const query2 = "abc123"

        const stations1 = await stationSearch(0, 25, query1)
        const stations2 = await stationSearch(0, 25, query2)

        expect(stations1).toHaveProperty("result")
        expect(stations1).toHaveProperty("totalPages")
        expect(stations1["result"].length).toBeGreaterThan(0)
        expect(stations2).toHaveProperty("result")
        expect(stations2).toHaveProperty("totalPages")
        expect(stations2["result"].length).toEqual(0)
        
    })
})


