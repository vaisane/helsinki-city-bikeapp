import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import pin from "../assets/pin-point.png";
import "mapbox-gl/dist/mapbox-gl.css";

const StationLocation = ({ x, y }) => {
  const accessToken = process.env.REACT_APP_MAP_TOKEN;
  return (
    <Map
      initialViewState={{
        longitude: x || 0,
        latitude: y || 0,
        zoom: 15,
      }}
      style={{ width: "40rem", height: "25rem" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={accessToken}
    >
      <Marker
        longitude={x || 0}
        latitude={y || 0}
        anchor="bottom"
        color="blue"
      />
    </Map>
  );
};

export default StationLocation;
