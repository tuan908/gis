import React from 'react';
import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import { useRef, useEffect } from 'react';
import './Home.css';
import {
  c4,
  e1,
  f1,
  f1f2,
  f2,
  g1,
  c3,
  b1,
  b3,
  b4,
  b5,
  ba1,
  d6,
  c6,
  d5,
  c5,
  ba2,
  ba4,
  ba3,
  ba5,
  d2,
  d4,
  d3,
  c2,
  c1,
  wallSymbol,
  floorSymbol,
  lineSymbol,
} from './resources';

const Home = () => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const buildings = [
        e1,
        g1,
        f1,
        f2,
        f1f2,
        c4,
        c3,
        d6,
        c6,
        d5,
        c5,
        b1,
        ba1,
        ba2,
        b4,
        b3,
        b5,
        ba4,
        ba3,
        ba5,
        d2,
        d3,
        d4,
        c2,
        c1,
      ];

      const map = new Map({
        basemap: 'hybrid',
      });

      const view = new SceneView({
        container: mapDiv.current,
        map: map,

        camera: {
          // autocasts as new Camera()
          position: {
            // autocasts as new Point()
            x: 106.78050001,
            y: 10.889569999,
            z: 1000,
          },
          heading: 180,
          tilt: 0,
        },
      });

      /*********************
       * Add graphics layer
       *********************/

      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      /***************************
       * Add Buildings
       ***************************/
      buildings.forEach((building) => {
        building.baseGraphic = new Graphic({
          geometry: building.base,
          symbol: wallSymbol,
        });

        building.roofGraphic = new Graphic({
          geometry: building.roof,
          symbol: wallSymbol,
        });

        graphicsLayer.addMany([building.baseGraphic, building.roofGraphic]);

        for (let i = 0; i <= building.ringNumber; i++) {
          building.floorGraphic = new Graphic({
            geometry: building.floor[i],
            symbol: floorSymbol,
          });
          graphicsLayer.add(building.floorGraphic);
        }

        for (let i = 0; i <= building.ringNumber; i++) {
          building.wallGraphic = new Graphic({
            geometry: building.wall[i],
            symbol: wallSymbol,
          });
          graphicsLayer.add(building.wallGraphic);
        }

        for (let i = 0; i <= building.lineNumber; i++) {
          building.lineGraphic = new Graphic({
            geometry: building.line[i],
            symbol: lineSymbol,
          });
          graphicsLayer.add(building.lineGraphic);
        }
      });
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
};

export default Home;
