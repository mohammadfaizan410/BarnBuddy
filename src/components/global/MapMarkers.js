
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';



const MapWithMarkers = ({ coordinates, url, name }) => {
    const openGoogleMaps = (lat, lon) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
        window.open(url, '_blank');
    };
    const customIcon = L.icon({
        iconUrl: url,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    return (
        <>
        <MapContainer center={[coordinates[0].lat, coordinates[0].lon]} zoom={13} style={{ height: '300px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {coordinates.map((coord, index) => (
                <Marker key={index} position={[coord.lat, coord.lon]} icon={customIcon} onClick={() => console.log("tileClicked")} >
                    <Popup>{name} {index + 1}</Popup>
                    
                </Marker>
            ))}
        </MapContainer>
        <div>
                    <br />
                            <button onClick={(e) => { e.stopPropagation(); openGoogleMaps(coordinates[0].lat, coordinates[0].lon); }}>Open in Google Maps</button>
                        </div>
            </>
    );
};

export default MapWithMarkers;