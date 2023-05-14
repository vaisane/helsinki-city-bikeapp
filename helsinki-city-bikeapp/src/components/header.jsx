import React from 'react'

const header = ({setShowView}) => {
  return (
    <div className="header">
      <h1>Helsinki City BikeApp!</h1>
      <div className="navButtons">
        <button onClick={() => {setShowView("journeys")}}>Journeys</button>
        <button onClick={() => {setShowView("stations")}}>Stations</button>
      </div>
    </div>
  )
}

export default header