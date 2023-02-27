import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "./App.css";
import RoutingMachine from "./Maprouting";

function Map () {
    const position = [ 36.8065, 10.1815 ];
    return (
        <div className="App">
            <MapContainer center={ position } zoom={ 13 } scrollWheelZoom={ false }>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <RoutingMachine />
            </MapContainer>
        </div>
    );
}

let DefaultIcon = L.icon( {
    iconUrl: "/marker-icon.png",
    iconSize: [ 25, 41 ],
    iconAnchor: [ 10, 41 ],
    popupAnchor: [ 2, -40 ],
} );
L.Marker.prototype.options.icon = DefaultIcon;
export default Map;
