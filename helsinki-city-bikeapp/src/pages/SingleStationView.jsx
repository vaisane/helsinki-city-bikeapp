import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NotFoundError from "../components/NotFoundError";
import LoadingLinear from "../components/LoadingLinear";
import Button from "@mui/material/Button";
import axios from "axios";
import "../styles/app.css";

const SingleStationView = () => {
  const [station, setStation] = useState({});
  const [journeysEnding, setJourneysEnding] = useState();
  const [journeysStarting, setJourneysStarting] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const stationId = location.pathname.split("/")[2];
  const apiUri = process.env.REACT_APP_API_URI;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .all([
        axios.get(`${apiUri}/stations/id/${stationId}`),
        axios.get(`${apiUri}/journeys/count-starting?stationId=${stationId}`),
        axios.get(`${apiUri}/journeys/count-returning?stationId=${stationId}`),
      ])
      .then(
        axios.spread((station, startingJourneys, endingJourneys) => {
          setStation(station.data[0]);
          setJourneysStarting(startingJourneys.data);
          setJourneysEnding(endingJourneys.data);
          setLoading(false);
        })
      )
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [stationId, apiUri]);

  if (error) {
    return <NotFoundError />;
  }

  return (
    <>
      {loading ? (
        <LoadingLinear />
      ) : (
        <div className="singleStationView">
          <p>Name: {station["Nimi"]}</p>
          <p>Address: {station["Osoite"]}</p>
          <p>Journeys starting from this station: {journeysStarting}</p>
          <p>Journeys ending to this station: {journeysEnding}</p>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/stations");
            }}
          >
            Back to station list
          </Button>
        </div>
      )}
    </>
  );
};

export default SingleStationView;
