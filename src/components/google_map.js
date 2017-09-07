import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps'; 
//const API_KEY = 'AIzaSyB8ZAHHnoUo5xwwhCtowRkfZ5Fzxr5ssZE';
//const googleMapURL= `https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=${API_KEY}`;
export default function (props) {

        return (
            
            <GoogleMapLoader 
            containerElement = { <div style={{height: '100%'}} /> }
            googleMapElement = {
                <GoogleMap
                        defaultZoom={12}
                        defaultCenter={{lat: props.lat, lng: props.lon}}
                    />
            }
          />
        );
}

