import React, { useState } from 'react';
import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import { useRef, useEffect } from 'react';
import axios from 'axios';

import './Home.css';
import { wallSymbol, floorSymbol, lineSymbol } from './resources';
import { getData } from './api/api';


const Home = () => {
  const mapDiv = useRef(null);
  const [buildings, setBuildings] = useState([])

  useEffect( async () => {
    await axios.get("http://localhost:8080/getBuildings")
    .then(res => {
      setBuildings(res.data)
    })
  }, []);

  if (mapDiv.current) {
    const map = new Map({
      basemap: 'topo-vector',
    });

    const view = new SceneView({
      container: mapDiv.current,
      map: map,

      camera: {
        // autocasts as new Camera()
        position: {
          // autocasts as new Point()
          x: 106.780805994203,
          y: 10.884138520322065,
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

  return (
    <>
      <div className="mapDiv" ref={mapDiv}></div>
    </>
  );
};

export default Home;
