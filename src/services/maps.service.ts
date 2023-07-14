import { decode } from '@mapbox/polyline';

class MapsService {
  static async getDirections(startCoords: string, destinationCoords: string) {
    try {
      const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startCoords}&destination=${destinationCoords}&key=AIzaSyDNYfJ6b6LqB_XeFzhegzlAJ6oXlURKAx4`);
      const respJson = await resp.json();
      const points = decode(respJson.routes[0].overview_polyline.points);
      const coords = points.map((point) => ({
        latitude: point[0],
        longitude: point[1],
      }));
      return coords;
    } catch (error) {
      return error;
    }
  }
}

export default MapsService;
