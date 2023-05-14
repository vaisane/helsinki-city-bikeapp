import {React, useEffect, useState} from 'react'
import axios from 'axios'

const StationView = () => {
  let [stations, setStations] = useState([])

  const fetchData = () => {
    axios.get("http://127.0.0.1:4000/stations/?page=1").then((response) => setStations(response.data))
    
  }

  const listItems = stations.map((station) => {
    return <div>{station["Nimi"]}</div>
  })

  useEffect(() => {
    fetchData()
  },[])
  
  return (
    <ul>{listItems}</ul>
  )
}

export default StationView