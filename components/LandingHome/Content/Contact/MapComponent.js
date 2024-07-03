import React, { useEffect } from 'react';

const MapComponent = ({ lat, lng, title, content }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mapOptions = {
        center: { lat, lng },
        zoom: 10,
      };

      const map = new window.google.maps.Map(document.getElementById('map_design'), mapOptions);

      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title,
      });

      const infowindow = new window.google.maps.InfoWindow({
        content,
      });

      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
    }
  }, [lat, lng, title, content]);

  return (
    <div id="map_design" style={{ height: '400px' }}></div>
  );
};

export default MapComponent;