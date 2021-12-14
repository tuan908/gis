import { renderFloor, renderWall, renderLine, renderWindow } from "./util.js"

const base = {
    type: "polygon",
    rings: [
        [106.77965417110432, 10.885440203060194, 0],
        [106.779684346014, 10.885404644773041, 0],
        [106.7797024509238, 10.885420448458074, 0],
        [106.77967428773077, 10.885454031285997, 0]
    ]
}

const roof = {
    type: "polygon",
    rings: [
        [106.77965417110432, 10.885440203060194, 45],
        [106.779684346014, 10.885404644773041, 45],
        [106.7797024509238, 10.885420448458074, 45],
        [106.77967428773077, 10.885454031285997, 45]
    ]
}

const floor = renderFloor(3, base.rings)

const wall = renderWall(3, base.rings)

const line = renderLine(6, 3, base.rings)

const ringNumber = 3

const lineNumber = 8

let baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic

const f1f2 = { ringNumber, lineNumber, baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic, base, roof, floor, wall, line }

export { f1f2 }