import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleStationView = () => {
    const location = useLocation()
    const stationInfo = location.state
    return (
        <div>{JSON.stringify(stationInfo)}</div>
    )
}

export default SingleStationView