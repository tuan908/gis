import { renderFloor, renderWall, renderLine, renderWindow } from "./util.js"

const c2BaseRings = [
    [106.78033247614586, 10.883297206446121, 0],
    [106.78050212584617, 10.883443391534625, 0],
    [106.7806476356682, 10.883268891308077, 0],
    [106.78047463320699, 10.88312994954519, 0],
  ];
  
  const c2RoofRings = [
    [106.78033247614586, 10.883297206446121, 45],
    [106.78050212584617, 10.883443391534625, 45],
    [106.7806476356682, 10.883268891308077, 45],
    [106.78047463320699, 10.88312994954519, 45],
  ];

  const base = {
    type: 'polygon',
    rings: c2BaseRings,
  };
  
  const roof = {
    type: 'polygon',
    rings: c2RoofRings,
  };

  const floor = renderFloor(3, base.rings)

  const wall = renderWall(3, base.rings)
  
  const line = renderLine(6, 3, base.rings)
  
  const ringNumber = 3
  
  const lineNumber = 8
  
  let baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic
  
  const c2 = { ringNumber, lineNumber, baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic, base, roof, floor, wall, line }
  
  export { c2 }