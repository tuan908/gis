import axios from "axios"
import { renderFloor, renderWall, renderLine, renderWindow } from "./util.js"

// let floor, wall, line
const fetchBuilding = async () => {
    let res = await axios.get("http://localhost:8080/getBuildingById?id=61b865db6ef5c86fbdfed83e")
    
        let { floor, line, wall } = res.data;
        let ringNumber = 11
        let lineNumber = 8
        let baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic
        return { ringNumber, lineNumber, baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic, base, roof, floor, wall, line }
}

// let { floor, wall, line } = fetchBuilding()

const base = {
  type: 'polygon',
  rings: [
    [106.78290256961101, 10.882587609855685, 0],
    [106.78291933341626, 10.882603413690127, 0],
    [106.7829079340287, 10.882619217523741, 0],
    [106.78303064508312, 10.882717991464759, 0],
    [106.78304606778394, 10.882704821607847, 0],
    [106.78306953711129, 10.882725893378622, 0],
    [106.78319023650906, 10.882581683417564, 0],
    [106.78316475552509, 10.88255863615704, 0],
    [106.78317563702103, 10.882544222869857, 0],
    [106.78305426707104, 10.882438863936837, 0],
    [106.78304085602683, 10.88245532627257, 0],
    [106.78302342166938, 10.882442156404053, 0],
  ],
};

const roof = {
  type: 'polygon',
  rings: [
    [106.78290256961101, 10.882587609855685, 45],
    [106.78291933341626, 10.882603413690127, 45],
    [106.7829079340287, 10.882619217523741, 45],
    [106.78303064508312, 10.882717991464759, 45],
    [106.78304606778394, 10.882704821607847, 45],
    [106.78306953711129, 10.882725893378622, 45],
    [106.78319023650906, 10.882581683417564, 45],
    [106.78316475552509, 10.88255863615704, 45],
    [106.78317563702103, 10.882544222869857, 45],
    [106.78305426707104, 10.882438863936837, 45],
    [106.78304085602683, 10.88245532627257, 45],
    [106.78302342166938, 10.882442156404053, 45],
  ],
};

const floor = renderFloor(11, base.rings);

const wall = renderWall(11, base.rings);

const line = renderLine(6, 11, base.rings);

const ringNumber = 11;

const lineNumber = 6

let baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic;

const b1 = { ringNumber, lineNumber, baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic, base, roof, floor, wall, line }

// let b1 = fetchBuilding();
// console.log(b1.res)
export { b1, fetchBuilding }
