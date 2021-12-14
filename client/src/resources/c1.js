import { renderFloor, renderWall, renderLine, renderWindow } from "./util.js"

const base = {
    type: 'polygon',
    rings: [
      [106.78057387494717, 10.883013396445534, 0],
      [106.78074151299097, 10.883159581673258, 0],
      [106.7808836700521, 10.882984422788274, 0],
      [106.78071200869526, 10.88283955445974, 0],
    ],
  };
  
  const roof = {
    type: 'polygon',
    rings: [
      [106.78057387494717, 10.883013396445534, 45],
      [106.78074151299097, 10.883159581673258, 45],
      [106.7808836700521, 10.882984422788274, 45],
      [106.78071200869526, 10.88283955445974, 45],
    ],
  };
  
  const floor = renderFloor(3, base.rings)

  const wall = renderWall(3, base.rings)
  
  const line = renderLine(6, 3, base.rings)
  
  const ringNumber = 3
  
  const lineNumber = 8
  
  let baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic
  
  const c1 = { ringNumber, lineNumber, baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic, base, roof, floor, wall, line }
  
  export { c1 }