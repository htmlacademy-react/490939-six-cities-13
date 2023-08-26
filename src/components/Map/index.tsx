import React, {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {TCity} from '../../types/types.ts';
import useMap from '../../Hooks/UseMap.ts';
import {TOffer} from '../../mocks/offers.ts';

type MapProps = {
  city: TCity;
  offers: TOffer[];
  selectedOffer: TOffer | undefined;
  height: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 39]
});


const Map: React.FC<MapProps> = ({city, offers, selectedOffer, height}) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.lat,
          lng: offer.lng,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);
  return <div style={{height: `${height}px`}} ref={mapRef}></div>;
};

export default Map;
