import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import LeafletRouting from "./LeafletRouting";
import "./App.css";

function Map() {
  const position = [28.4212, 70.2989];
  return (
    <div className="App">
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletRouting />
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default Map;
