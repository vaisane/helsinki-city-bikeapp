import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleStationView = (props) => {
    const location = useLocation()
    console.log(location.state.station)
    return (
        <div>{location.state.station["Nimi"]}</div>
    )
}

export default SingleStationView