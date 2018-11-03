import React, {Component} from 'react';
import {withScriptjs, InfoWindow, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import axios from 'axios';
import Search from "./Search"


const MyMapComponent = withScriptjs(withGoogleMap((props) => <GoogleMap zoom={props.zoom} center={props.center}>



    {
        props.markers && props.markers.filter(marker => marker.isVisable).map((marker,index) =>
         <Marker key={index} position={{
                lat: marker.lat,
                lng: marker.lng
            }} onClick={() => {props.infoWindow(marker)}}>
            {
                marker.isOpen && (<InfoWindow>
                    <div>
                        <img src={`${props.photos.prefix}200x200${props.photos.suffix}`} alt={"image of " + marker.name}/>
                        <p>{marker.name}</p>
                    </div>
                </InfoWindow>)
            }
        </Marker>)
    }
    <Search/>
</GoogleMap>))

class MapContainer extends Component {
    constructor() {
        super()
        this.state = {
            venues: [],
            center: [],
            markers: [],
            photos:{},
            zoom: 11
        }
    }

    componentDidMount() {
        this.getPlaces()
    }



    closeWindow = () => {
        const marker = this.state.markers.map(marker => {
            marker.isOpen = false;
            return marker
        })
        this.setState({
            markers: Object.assign(this.state.markers, marker)
        })
    }

    infoWindow = (marker) => {
        this.closeWindow();
        marker.isOpen = true;
        this.setState({
            markers: Object.assign(this.state.markers,marker)
        });

(()=>{
        const id=marker.id
        console.log(id);
        const photoSearch = "https://api.foursquare.com/v2/venues/"+id+"/photos?"
        const photoParams = {
            client_id: "G15TPMV3XGKPDH0QEY4BMFMZMRJAQ4CUTIKL0KXAPQXPVA5I",
            client_secret: "OP1FJ5MLN22TKJWGYZDQEXA51A0APPSUFNCAU2S0WNEBD2ZG",
            limit: 10,
            v: "20181027"
        }
        axios.get(photoSearch + new URLSearchParams(photoParams)).then(res=>{
            const prefix=res.data.response.photos.items[0].prefix
            const suffix=res.data.response.photos.items[0].suffix
            const photos={
                prefix:prefix,
                suffix:suffix
            }
            this.setState({photos})
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    })()
}

    getPlaces = () => {
        const localSearch = "https://api.foursquare.com/v2/venues/search?";
        const searchParams = {
            client_id: "G15TPMV3XGKPDH0QEY4BMFMZMRJAQ4CUTIKL0KXAPQXPVA5I",
            client_secret: "OP1FJ5MLN22TKJWGYZDQEXA51A0APPSUFNCAU2S0WNEBD2ZG",
            query: "coffee",
            near: "chicago",
            limit: 20,
            v: "20181027"
        }

    axios.get(localSearch + new URLSearchParams(searchParams)).then(response => {
        console.log(response)
        const venues = response.data.response.venues;
        const center = response.data.response.geocode.feature.geometry.center;
        const markers = venues.map(venue => {
            return {lat: venue.location.lat, lng: venue.location.lng, isOpen: false, isVisable: true, name: venue.name, id:venue.id}
        })
        this.setState({venues, center, markers});
    }).catch(err => {
        console.log(err)
    })
}



    render() {
        return (<MyMapComponent zoom={this.state.zoom} center={this.state.center} markers={this.state.markers} infoWindow={this.infoWindow} photos={this.state.photos}  isMarkerShown="isMarkerShown"
        combineFunctions={this.combineFunctions} googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyD-ceCUOPuTZyturppPcZaHKA9REttJa-0" loadingElement={<div style = {{ height: `100%` }}/>} containerElement={<div style = {{ height: `80vh` }}/>} mapElement={<div style = {{ height: `100%` }}/>}/>)
    };
};
export default MapContainer;
