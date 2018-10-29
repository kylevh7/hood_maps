import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import axios from 'axios';

const MyMapComponent = withScriptjs(withGoogleMap((props) => <GoogleMap zoom={props.zoom} center={props.center}>
    {
        props.markers && props.markers.filter(marker => marker.isVisable).map((marker, index) => <Marker key={index} position={{
                lat: marker.lat,
                lng: marker.lng
            }}/>)
    }
</GoogleMap>))

class MapContainer extends Component {
    constructor() {
        super()
        this.state = {
            venues: [],
            center: [],
            markers: [],
            zoom: 11
        }
    }

    componentDidMount() {
        this.getPlaces()
    }

    getPlaces = () => {
        const endPoint = "https://api.foursquare.com/v2/venues/search?";
        const params = {
            client_id: "G15TPMV3XGKPDH0QEY4BMFMZMRJAQ4CUTIKL0KXAPQXPVA5I",
            client_secret: "OP1FJ5MLN22TKJWGYZDQEXA51A0APPSUFNCAU2S0WNEBD2ZG",
            query: "coffee",
            near: "Cadillac, MI",
            limit: 10,
            v: "20181027"
        }
        axios.get(endPoint + new URLSearchParams(params)).then(response => {
            console.log(response)
            const venues = response.data.response.venues;
            const center = response.data.response.geocode.feature.geometry.center;
            const markers = venues.map(venue => {
                return {lat: venue.location.lat, lng: venue.location.lng, isOpen: false, isVisable: true}
            })
            this.setState({venues, center, markers});
            console.log(markers)

        }).catch(err => {
            console.log("UghOhhh" + err)
        })
    }

    render() {
        return (<MyMapComponent zoom={this.state.zoom} center={this.state.center} markers={this.state.markers} isMarkerShown="isMarkerShown" googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style = {{ height: `100%` }}/>} containerElement={<div style = {{ height: `400px` }}/>} mapElement={<div style = {{ height: `100%` }}/>}/>)
    };
};
export default MapContainer;
