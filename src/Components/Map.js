import { useMemo } from "react"
import { GoogleMap, MarkerF } from "@react-google-maps/api"

const Map = () => {
    
    const center = useMemo(() => ({lat: 40.730824, lng: -73.997330}), [])
    
    return(
       <GoogleMap zoom={15} center={center} mapContainerClassName="map-container" height="600px" width="600px">
       <MarkerF position={{lat: 40.730824, lng: -73.997330}}/>
       </GoogleMap>
    )
}

export default Map