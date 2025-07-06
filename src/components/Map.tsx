import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [accessToken, setAccessToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !accessToken) return;

    try {
      // Set Mapbox access token
      mapboxgl.accessToken = accessToken;
      
      // Initialize map centered on Novi Sad, Serbia
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [19.8335, 45.2671], // Novi Sad coordinates
        zoom: 15,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add a marker for the office location
      new mapboxgl.Marker({
        color: '#22c55e' // Green color matching the theme
      })
        .setLngLat([19.8335, 45.2671])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            '<div style="padding: 8px;"><strong>Smaragd Office</strong><br/>17 Slobodana Bajica<br/>Novi Sad, Serbia</div>'
          )
        )
        .addTo(map.current);

      setIsMapLoaded(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  const handleLoadMap = () => {
    if (accessToken) {
      initializeMap();
    }
  };

  if (!isMapLoaded) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Load Interactive Map</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              To display the map, please enter your Mapbox public token. 
              Get yours at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
            </p>
            <Input
              type="text"
              placeholder="Enter Mapbox public token..."
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
              className="w-full"
            />
            <Button 
              onClick={handleLoadMap} 
              disabled={!accessToken}
              variant="luxury"
              className="w-full"
            >
              Load Map
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px]">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-lg" />
    </div>
  );
};

export default Map;