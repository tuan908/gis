import { renderFloor, renderWall, renderLine, renderWindow } from "./util.js"

const d3BaseRings = [
    [106.78120590542346, 10.884596302222606, 0],
    [106.78138091954051, 10.884741169698652, 0],
    [106.78152642936253, 10.884565353254597, 0],
    [106.78135208579455, 10.884422461161893, 0],
  ];
  
  const d3RoofRings = [
    [106.78120590542346, 10.884596302222606, 45],
    [106.78138091954051, 10.884741169698652, 45],
    [106.78152642936253, 10.884565353254597, 45],
    [106.78135208579455, 10.884422461161893, 45],
  ];
  
  const base = {
    type: 'polygon',
    rings: d3BaseRings,
  };
  
  const roof = {
    type: 'polygon',
    rings: d3RoofRings,
  };
  
  const floor = renderFloor(3, base.rings)

  const wall = renderWall(3, base.rings)
  
  const line = renderLine(6, 3, base.rings)
  
  const ringNumber = 3
  
  const lineNumber = 8
  
  let baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic
  
  const d3 = { ringNumber, lineNumber, baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic, base, roof, floor, wall, line }
  
  export { d3 }