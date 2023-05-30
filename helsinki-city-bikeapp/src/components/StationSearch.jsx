import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "../styles/app.css";

const StationSearch = ({
  setStations,
  setLoading,
  setRowCount,
  paginationModel,
}) => {
  const [searchText, setSearchText] = useState("");
  const searchStations = async () => {
    setLoading(true);
    axios
      .get(
        `http://127.0.0.1:4000/stations/search?searchText=${searchText}&page=${paginationModel.page}&limit=${paginationModel.pageSize}`
      )
      .then((response) => {
        setStations(response.data.result);
        setRowCount(response.data.totalItems);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchClick = async () => {
    await searchStations();
  };
  return (
    <div className="stationSearch">
      <div
        style={{
          fontWeight: "bold",
          paddingRight: "1rem",
          fontSize: "1.25rem",
        }}
      >
        Search:
      </div>
      <TextField
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        variant="outlined"
        size="small"
        style={{ paddingRight: "1rem" }}
      />
      <Button variant="contained" onClick={handleSearchClick}>
        Search
      </Button>
    </div>
  );
};

export default StationSearch;
