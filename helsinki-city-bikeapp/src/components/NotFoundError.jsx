import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../styles/app.css";

const NotFoundError = () => {
  const navigate = useNavigate();
  return (
    <div className="notFoundError">
      <h1>Station not found!</h1>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/stations");
        }}
      >
        Back to station list
      </Button>
    </div>
  );
};

export default NotFoundError;
