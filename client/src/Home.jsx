import { SearchOutlined } from '@ant-design/icons';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AutoComplete, Input, Layout } from 'antd';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Home.css';
import { floorSymbol, lineSymbol, wallSymbol } from './resources';

const { Header, Content } = Layout;

const options = [
  { value: 'b1' },
  { value: 'b3' },
  { value: 'b4' },
  { value: 'b5' },
  { value: 'ba1' },
  { value: 'ba2' },
  { value: 'ba3' },
  { value: 'ba4' },
  { value: 'ba5' },
  { value: 'c1' },
  { value: 'c2' },
  { value: 'c3' },
  { value: 'c4' },
  { value: 'c5' },
  { value: 'd2' },
  { value: 'd3' },
  { value: 'd4' },
  { value: 'd5' },
  { value: 'e1' },
  { value: 'f1' },
  { value: 'f1f2' },
  { value: 'f2' },
  { value: 'g1' },
];

const Home = () => {
  const isLogin = localStorage.getItem('token');
  const [info, setInfo] = useState('');
  const [buildingInfo, setBuildingInfo] = useState();

  const navigateTo = useNavigate();
  const mapDiv = useRef(null);
  const [buildings, setBuildings] = useState([]);

  async function GetData(name) {
    const raw = await axios.get(
      `http://localhost:8080/getBuildingByName?name=${name}`
    );

    const { data } = raw;
    setBuildingInfo(data);
  }

  useEffect(() => {
    if (info !== undefined) {
      let name = info;
      GetData(name);
      navigateTo(`/${name}`, { state: buildingInfo });
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigateTo('/login');
  };

  useEffect(() => {
    async function GetData() {
      await axios.get('http://localhost:8080/getBuildings').then((res) => {
        setBuildings(res.data);
      });
    }
    GetData();
  }, []);

  useEffect(() => {
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
          popupTemplate: {
            title: building.name,
            content: `<table style="border: 1px solid black;border-collapse:collapse;text-align:center;">
              <thead>
                <tr style="border: 1px solid black;border-collapse:collapse">
                  <td style="border: 1px solid black;font-weight:bold;">Tên tòa nhà</td>
                  <td style="border: 1px solid black;font-weight:bold;">Chiều cao (m)</td>
                  <td style="border: 1px solid black;font-weight:bold;">Tổng diện tích xây dựng (m2)</td>
                  <td style="border: 1px solid black;font-weight:bold;">Năm xây dựng</td>
                </tr>
              </thead>
              <tbody>
                 <tr style="border: 1px solid black;border-collapse:collapse">
                  <td style="border: 1px solid black;">${building.name}</td>
                  <td style="border: 1px solid black;">${building.height}</td>
                  <td style="border: 1px solid black;">${building.area}</td>
                  <td style="border: 1px solid black;">${building.year}</td>
                </tr>
              </tbody>
            </table>`,
          },
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
  }, [buildings]);

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '0 10%',
          top: '0',
          position: 'sticky',
          width: '100%',
        }}
      >
        <div
          className="logo"
          style={{
            color: 'white',
            width: 'fit-content',
            margin: 'auto 3rem auto 0',
            fontSize: '32px',
            zIndex: '100',
          }}
        >
          KTX B
        </div>
        <NavLink to="/">Trang chủ</NavLink>
        <AutoComplete
          options={options}
          prefix={<SearchOutlined />}
          style={{ width: '40%', height: '50%', margin: 'auto' }}
          filterOption={(inputValue, option) => {
            return (
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            );
          }}
        >
          <Input.Search
            allowClear
            size="large"
            placeholder="Nhập tên tòa nhà cần tìm, ví dụ A1"
            style={{ margin: 'auto', display: 'flex' }}
          />
        </AutoComplete>
        {!isLogin && (
          <>
            <NavLink to="/login" style={{ margin: 'auto 0' }}>
              Đăng nhập
            </NavLink>
            <NavLink to="/register" style={{ margin: 'auto 1rem' }}>
              Đăng ký
            </NavLink>
          </>
        )}

        {isLogin && (
          <>
            <NavLink to="/profile" style={{ display: 'flex ' }}>
              <AccountCircleIcon
                color="primary"
                fontSize="large"
                style={{ margin: 'auto 0' }}
              />
            </NavLink>
            <span
              style={{ margin: '0 2rem', color: '#1890ff', cursor: 'pointer' }}
              onClick={handleLogOut}
            >
              Đăng xuất
            </span>
          </>
        )}
      </Header>
      <Content>
        <div className="mapDiv" ref={mapDiv}></div>
      </Content>
    </Layout>
  );
};

export default Home;
