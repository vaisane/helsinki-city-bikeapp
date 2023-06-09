import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Headerbar";
import StationList from "./pages/StationList";
import Journeys from "./pages/Journeys";
import SingleStationView from "./pages/SingleStationView";
import "./styles/index.css";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<StationList />} />
          <Route path="stations" element={<StationList />} />
          <Route
            path="/stations/:stationName"
            element={<SingleStationView />}
          />
          <Route path="journeys" element={<Journeys />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
