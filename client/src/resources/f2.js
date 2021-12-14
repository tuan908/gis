import { renderFloor, renderWall, renderLine, renderWindow } from "./util.js"

const base = {
    type: "polygon",
    rings: [
        [106.77963306492705, 10.885500630334363, 0],
        [106.77974035328145, 10.885594793914976, 0],
        [106.77974907046023, 10.885584916617708, 0],
        [106.77976114040011, 10.885595452401445, 0],
        [106.77975041156468, 10.885609280617047, 0],
        [106.7797470588036, 10.88562245034558, 0],
        [106.77972454924823, 10.885768123011381, 0],
        [106.77988950509311, 10.885795120939866, 0],
        [106.77991364497284, 10.88565815581394, 0],
        [106.77988145846653, 10.885648278518783, 0],
        [106.77993174988265, 10.88558177138946, 0],
        [106.7799471725836, 10.885617988144887, 0],
        [106.78008061247571, 10.885569260143898, 0],
        [106.78002428608966, 10.885409247874122, 0],
        [106.7798962106166, 10.885454024978854, 0],
        [106.77987140018465, 10.885464560767224, 0],
        [106.77985933024478, 10.88547509655522, 0],
        [106.77984658975271, 10.885466536227495, 0],
        [106.77985195416991, 10.885458634384978, 0],
        [106.7797433247111, 10.885370397144104, 0]
    ]
}

const roof = {
    type: "polygon",
    rings: [
        [106.77963306492705, 10.885500630334363, 45],
        [106.77974035328145, 10.885594793914976, 45],
        [106.77974907046023, 10.885584916617708, 45],
        [106.77976114040011, 10.885595452401445, 45],
        [106.77975041156468, 10.885609280617047, 45],
        [106.7797470588036, 10.88562245034558, 45],
        [106.77972454924823, 10.885768123011381, 45],
        [106.77988950509311, 10.885795120939866, 45],
        [106.77991364497284, 10.88565815581394, 45],
        [106.77988145846653, 10.885648278518783, 45],
        [106.77993174988265, 10.88558177138946, 45],
        [106.7799471725836, 10.885617988144887, 45],
        [106.78008061247571, 10.885569260143898, 45],
        [106.78002428608966, 10.885409247874122, 45],
        [106.7798962106166, 10.885454024978854, 45],
        [106.77987140018465, 10.885464560767224, 45],
        [106.77985933024478, 10.88547509655522, 45],
        [106.77984658975271, 10.885466536227495, 45],
        [106.77985195416991, 10.885458634384978, 45],
        [106.7797433247111, 10.885370397144104, 45]
    ]
}

const floor = renderFloor(19, base.rings)

const wall = renderWall(19, base.rings)

const line = renderLine(6, 19, base.rings)

const ringNumber = 19

const lineNumber = 8

let baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic

const f2 = { ringNumber, lineNumber, baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic, base, roof, floor, wall, line }

export { f2 }