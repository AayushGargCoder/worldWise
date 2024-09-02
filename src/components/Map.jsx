/*eslint-disable*/
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useCities } from "../context/CitiesContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useUrlPosition from "../hooks/useUrlPosition";
import { useGeolocation } from "../hooks/useGeoLocation";
function Map() {
  const { cities } = useCities();
  const {
    isLoading: isLoadingGeoLocation,
    position: { lat: geoLocationLat, lng: geoLocationLng },
    getPosition,
  } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geoLocationLat && geoLocationLng)
        setMapPosition([geoLocationLat, geoLocationLng]);
    },
    [geoLocationLat, geoLocationLng]
  );

  return (
    <div className={`${styles.mapContainer}`}>
      {!geoLocationLat && (
        <button
          onClick={(e) => {
            getPosition();
          }}
          className={styles.button}
        >
          {isLoadingGeoLocation ? "Loading..." : "Use Your Location"}
        </button>
      )}
      <MapContainer
        zoom={13}
        center={mapPosition}
        scrollWheelZoom={true}
        className={`${styles.map}`}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCentre position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

function ChangeCentre({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
