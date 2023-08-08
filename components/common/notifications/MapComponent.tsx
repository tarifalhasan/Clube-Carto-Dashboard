// "use client";

// import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: "400px",
//   height: "400px",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// function MapComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyCpqxUar62A05Zp1foTtGDwSZ8d_tchgFw",
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map: any) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map: any) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// }

// export default React.memo(MapComponent);

// import React, { useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: 37.7749,
//   lng: -122.4194,
// };

// const MapComponent: React.FC = () => {
//   const [selectedLocation, setSelectedLocation] = useState<any>(null);

//   const handleLocationChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const selectedValue = event.target.value;
//     const getCoordinatesForLocation = async (
//       locationName: string
//     ): Promise<any> => {
//       try {
//         const response = await fetch(
//           `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//             locationName
//           )}&key=AIzaSyCpqxUar62A05Zp1foTtGDwSZ8d_tchgFw`
//         );

//         if (!response.ok) {
//           throw new Error("Error fetching coordinates");
//         }

//         const data = await response.json();
//         if (data.results.length > 0) {
//           const { lat, lng } = data.results[0].geometry.location;
//           return { lat, lng };
//         } else {
//           console.error("No results found for the location.");
//           return null;
//         }
//       } catch (error) {
//         console.error("Error fetching coordinates:", error);
//         return null;
//       }
//     };

//     // Implement your logic to fetch coordinates using the selected value
//     const locationCoordinates = getCoordinatesForLocation(selectedValue);
//     setSelectedLocation(locationCoordinates);
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCpqxUar62A05Zp1foTtGDwSZ8d_tchgFw">
//       <div className="flex flex-col items-center mt-4">
//         <label htmlFor="locationSelect" className="mb-2">
//           Select a location:
//         </label>
//         <select
//           id="locationSelect"
//           className="p-2 border rounded"
//           onChange={handleLocationChange}
//         >
//           <option value="San Francisco">San Francisco</option>
//           <option value="New York">New York</option>
//           {/* Add more location options */}
//         </select>

//         <div className="mt-4" style={{ width: "100%", height: "400px" }}>
//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={selectedLocation || center}
//             zoom={10}
//           >
//             {/* {selectedLocation && <Marker position={selectedLocation} />}  */}
//             {"New York" && <Marker position="New York" />}
//           </GoogleMap>
//         </div>
//       </div>
//     </LoadScript>
//   );
// };

// export default MapComponent;

import React from "react";

function MapComponent() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03610045224!2d-74.30933378844341!3d40.69753995801686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1691491776588!5m2!1sen!2sbd"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapComponent;
