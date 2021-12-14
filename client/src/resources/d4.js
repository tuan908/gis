import { renderFloor, renderWall, renderLine, renderWindow } from "./util.js"

const d4BaseRings = [
    [106.78096718880866, 10.884880110716093, 0],
    [106.78113885016553, 10.885025636540293, 0],
    [106.78128570109192, 10.884851137240343, 0],
    [106.78111001642199, 10.884707586796203, 0],
  ];
  
  const roofRings = [
    [106.78096718880866, 10.884880110716093, 45],
    [106.78113885016553, 10.885025636540293, 45],
    [106.78128570109192, 10.884851137240343, 45],
    [106.78111001642199, 10.884707586796203, 45],
  ];
  
  const base = {
    type: 'polygon',
    rings: d4BaseRings,
  };
  
  const roof = {
    type: 'polygon',
    rings: roofRings,
  };
  
  const floor = renderFloor(3, base.rings)

  const wall = renderWall(3, base.rings)
  
  const line = renderLine(6, 3, base.rings)
  
  const ringNumber = 3
  
  const lineNumber = 8
  
  let baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic
  
  const d4 = { ringNumber, lineNumber, baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic, base, roof, floor, wall, line }
  
  export { d4 }