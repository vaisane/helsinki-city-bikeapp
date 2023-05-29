import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";

const columns = [
  {
    field: "Departure station name",
    headerName: "Departure station",
    flex: 2,
  },
  { field: "Return station name", headerName: "Return station", flex: 2 },
  { field: "Covered distance (m)", headerName: "Distance (km)", flex: 1 },
  { field: "Duration (sec)", headerName: "Duration (min)", flex: 1 },
];

const JourneyView = () => {
  const [journeys, setJourneys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 1,
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://127.0.0.1:4000/journeys/?page=${paginationModel.page}&limit=${paginationModel.pageSize}`
      )
      .then((response) => {
        setJourneys(response.data.result);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      });
  }, [paginationModel]);

  return (
    <>
      <h2>Journey list</h2>
      <DataGrid
        rows={journeys}
        getRowId={(row) => row["_id"]}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        rowCount={totalPages}
        rowsPerPageOptions={[25, 50, 100]}
        autoHeight={true}
        loading={loading}
      />
    </>
  );
};

export default JourneyView;
