import {React} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import StationList from './pages/StationList'
import Journeys from './pages/Journeys'

const App = () => {

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/"/>
        <Route path="stations" element={<StationList/>}/>
        <Route path="journeys" element={<Journeys/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


