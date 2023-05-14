import {React, useState} from 'react'
import Header from './components/header'
import StationView from './views/StationView'
import JourneyView from './views/JourneyView'

const App = () => {

  const [showView, setShowView] = useState("journeys")
  return (
    <>
      <Header setShowView={setShowView}/>
      {
        showView === "journeys" ? <JourneyView />
        : <StationView />
      }
    </>
  )
}

export default App


