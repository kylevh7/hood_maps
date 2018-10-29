import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import axios from 'axios';


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 44, lng: -85 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 44, lng: -85}} />}
  </GoogleMap>
))


class MapContainer extends Component{
    componentDidMount(){
        this.getPlaces()
    }

    getPlaces=()=>{
        const endPoint = "https://api.foursquare.com/v2/venues/search?";
        const params={
        client_id:"G15TPMV3XGKPDH0QEY4BMFMZMRJAQ4CUTIKL0KXAPQXPVA5I",
        client_secret:"OP1FJ5MLN22TKJWGYZDQEXA51A0APPSUFNCAU2S0WNEBD2ZG",
            query: "coffee",
            near: "McBain, MI",
            limit: 10,
            v: "20181027"
        }
    axios.get(endPoint + new URLSearchParams(params))
        .then(response=>{
            console.log(response)
        })
        .catch(err=>{
            console.log("UghOhhh"+ err)
        })
    }

render(){
    return(<MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />)
};
};
export default MapContainer;
