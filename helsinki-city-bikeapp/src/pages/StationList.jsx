import {React, useEffect, useState} from 'react'
import Paginator from '../components/Paginator'
import '../styles/stations.css'
import axios from 'axios'

const StationList = () => {
  const [stations, setStations] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)

  useEffect(() => {
    axios.get(`http://127.0.0.1:4000/stations/?page=${currentPage}`).then((response) => {
      setStations(response.data.result)
      setTotalPages(response.data.totalPages)
      })
  },[currentPage])
  
  const openSingleStationView = (station) => {
    console.log(station)
  }
  return (
    <div className="stationList">
      {stations.map((station) => {
        return <div key={station["_id"]} onClick={() => {openSingleStationView(station)}}>{station["Nimi"]}</div>
      })}
    <Paginator currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
    </div>
    
  )
}

export default StationList