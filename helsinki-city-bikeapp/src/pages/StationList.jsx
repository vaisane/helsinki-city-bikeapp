import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../styles/app.css";
import axios from "axios";

const columns = [
  {
    field: "ID",
    headerName: "ID",
    headerClassName: "listHeader",
    flex: 1,
  },
  {
    field: "Name",
    headerName: "Name",
    headerClassName: "listHeader",
    flex: 1,
  },
  {
    field: "Osoite",
    headerName: "Address",
    headerClassName: "listHeader",
    flex: 1,
  },
  {
    field: "Kapasiteetti",
    headerName: "Capacity",
    headerClassName: "listHeader",
    flex: 1,
  },
];

const StationList = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rowCount, setRowCount] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://127.0.0.1:4000/stations/?page=${paginationModel.page}&limit=${paginationModel.pageSize}`
      )
      .then((response) => {
        setStations(response.data.result);
        setRowCount(response.data.totalItems);
        setLoading(false);
      });
  }, [paginationModel]);

  return (
    <>
      <h2 style={{ justifySelf: "center" }}>Station list</h2>
      <DataGrid
        rows={stations}
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
        }}
      />
    </>
  );
};

export default StationList;
