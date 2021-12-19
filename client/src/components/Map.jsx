import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import SceneView from '@arcgis/core/views/SceneView';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBuildingData } from '../actions';
import { floorSymbol, lineSymbol, wallSymbol } from '../resources';

const MapDiv = () => {
  let content;
  const wrapper = useRef(null);
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.status);
  console.log(dataState);
  const data = useSelector((state) => state.buildingInfo);

  useEffect(() => {
    dispatch(fetchBuildingData());
  }, []);

  //   switch (dataState) {
  //     case 'loading':
  //       content = <h1>Loading content...</h1>;
  //       return content;

  //     case 'succeed':
  //       return data;

  //     default:
  //       break;
  //   }

  data.map((item) => console.log(item));

  if (wrapper.current) {
    const map = new Map({
      basemap: 'topo-vector',
    });

    const view = new SceneView({
      container: wrapper.current,
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

    data.map((building) => {
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
      <div className="warper" ref={wrapper}></div>
    </>
  );
};

export default MapDiv;
