"use client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

export function GoogleMaps({ center }) {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: Number(center.lat), lng: Number(center.lng) }}
        zoom={10}
      >
        <></>
      </GoogleMap>
    </LoadScript>
  );
}
