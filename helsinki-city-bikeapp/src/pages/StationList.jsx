import {React, useEffect, useState} from 'react'
import Pagination from '../components/Pagination'
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
    <>
    <div>
      {stations.map((station) => {
        return <div key={station["_id"]} onClick={() => {openSingleStationView(station)}}>{station["Nimi"]}</div>
      })}
    </div>
    <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default StationList