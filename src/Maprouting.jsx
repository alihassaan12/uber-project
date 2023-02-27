import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const RoutingMachine = () => {
    const map = useMap();
    useEffect( () => {

        var marker1 = L.marker( [ 36.8065, 10.1815 ], ).addTo(
            map
        );
        map.on( "click", function ( e ) {
            L.marker( [ e.latlng.lat, e.latlng.lng ] ).addTo( map );
            L.Routing.control( {
                waypoints: [
                    L.latLng( 36.8065, 10.1815 ),
                    L.latLng( e.latlng.lat, e.latlng.lng ),
                ],
                lineOptions: {
                    styles: [
                        {
                            color: "blue",
                            weight: 4,
                            opacity: 0.7,
                        },
                    ],
                },
            } )
                .on( "routesfound", function ( e ) {
                    e.routes[ 0 ].coordinates.forEach( ( c, i ) => {
                        setTimeout( () => {
                            marker1.setLatLng( [ c.lat, c.lng ] );
                        }, 1000 * i );
                    } );
                } )
                .addTo( map );
        } );
    }, [] );
    return null;
};

export default RoutingMachine;
