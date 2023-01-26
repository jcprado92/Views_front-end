import React from 'react'
import { useLoadScript } from '@react-google-maps/api'
import Map from '../Components/Map'
import "../styles/stylin.css"
import "../styles/home.css"
function Home() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY })

  if(!isLoaded) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div>
      <h1>Welcome to Views</h1>
      <Map />
    </div>
  )
}

export default Home