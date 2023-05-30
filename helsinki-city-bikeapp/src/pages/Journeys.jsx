import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../styles/app.css";
import axios from "axios";

const columns = [
  {
    field: "Departure station name",
    headerName: "Departure station",
    headerClassName: "listHeader",
    flex: 2,
  },
  {
    field: "Return station name",
    headerName: "Return station",
    headerClassName: "listHeader",
    flex: 2,
  },
  {
    field: "Covered distance (m)",
    headerName: "Distance",
    headerClassName: "listHeader",
    flex: 1,
    valueFormatter: (params) => {
      const kilometers = (params.value / 1000).toFixed(1);
      return `${kilometers} km`;
    },
  },
  {
    field: "Duration (sec)",
    headerName: "Duration",
    headerClassName: "listHeader",
    flex: 1,
    valueFormatter: (params) => {
      const minutes = Math.floor(params.value / 60);
      const seconds = params.value % 60;
      return `${minutes} min ${seconds} sec`;
    },
  },
];

const JourneyView = () => {
  const [journeys, setJourneys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rowCount, setRowCount] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  });
  const apiUri = process.env.REACT_APP_API_URI;

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${apiUri}/journeys/?page=${paginationModel.page}&limit=${paginationModel.pageSize}`
      )
      .then((response) => {
        setJourneys(response.data.result);
        setRowCount(response.data.totalItems);
        setLoading(false);
      });
  }, [paginationModel]);

  return (
    <>
      <h2 style={{ justifySelf: "center" }}>Journey list</h2>
      <DataGrid
        rows={journeys}
        getRowId={(row) => row["_id"]}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        rowCount={rowCount}
        rowsPerPageOptions={[25, 50, 100]}
        autoHeight={true}
        loading={loading}
        sx={{
          boxShadow: 5,
          marginBottom: 5,
          cursor: "pointer",
        }}
      />
    </>
  );
};

export default JourneyView;
