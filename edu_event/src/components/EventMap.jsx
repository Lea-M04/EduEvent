import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


const cityCoordinates = {
  "Prishtina": [42.6629, 21.1655],
  "Peja": [42.6600, 20.2883],
  "Gjakova": [42.3833, 20.4333],
  "Ferizaj": [42.3700, 21.1549],
  "Mitrovica": [42.8947, 20.8678],
  "Prizren": [42.2172, 20.7436],
  "Podujeve": [42.9179, 21.1757],
  "Drenas": [42.5569, 20.7911]
};


function SetBounds({ positions }) {
  const map = useMap();

  useEffect(() => {
    if (positions.length === 0) return;
    const bounds = L.latLngBounds(positions);
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [positions, map]);

  return null;
}

const EventMap = ({ events }) => {
  const positions = events
    .map(event => cityCoordinates[event.city])
    .filter(Boolean); 
  return (
    <MapContainer 
      center={[42.6629, 21.1655]} 
      zoom={8} 
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map(event => {
        const coords = cityCoordinates[event.city];
        if (!coords) return null;

        return (
          <Marker key={event.id} position={coords}>
            <Popup>
              <strong>{event.title}</strong><br />
              {event.location}<br />
              {event.field}<br />
              {event.date}
            </Popup>
          </Marker>
        );
      })}
      <SetBounds positions={positions} />
    </MapContainer>
  );
};

export default EventMap;
