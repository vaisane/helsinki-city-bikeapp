import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <h1>Helsinki City BikeApp!</h1>
      <Link to="/stations" className="btn">Stations</Link>
      <Link to="/journeys">Journeys</Link>  
    </div>
  )
}

export default Header