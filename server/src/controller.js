import Base from './entity/Base.js';
import Building from './entity/Building.js';
import Door from './entity/Door.js';
import Roof from './entity/Roof.js';
import Window from './entity/Window.js';
import { renderFloor, renderWall, renderLine, renderWindow } from "./util.js"

export default {
  getBuildings: async (req, res, next) => {
    try {
      const buildings = [];
      let bds = await Building.find();
      if(bds) {
        for(let i = 0; i <= bds.length; i++) {
          if(i === bds.length) return res.status(200).json(buildings);
          let b = await Base.findOne({ bid: bds[i]._id });
          if(b) {
            let r = await Roof.findOne({ bid: bds[i]._id })
            if(r) {
              let base = { type: 'polygon', rings: b.rings }
              let roof = { type: 'polygon', rings: r.rings }
              let floor = renderFloor(base.rings.length - 1, base.rings)
              let wall = renderWall(base.rings.length - 1, base.rings, bds[i].height)
              let line = renderLine(bds[i].lineCount - 2, base.rings.length - 1, base.rings)
              let ringNumber = base.rings.length - 1
              let lineNumber = bds[i].lineCount
              let baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic
              buildings.push({ ringNumber, lineNumber, baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic, base, roof, floor, wall, line })
            }
          }
        }
      }
    } catch (e) {
      return res.status(500).json({
        statusCode: 500,
        message: `Some errors occur while finding receiving forms building list`,
      });
    }
  },

  getBaseByBid: async (req, res, next) => {
    try {
      let { bid } = req.query;
      let b = await Base.findOne({ bid: bid });
      return res.status(200).json(b);
    } catch (e) {
      return res.status(500).json({
        statusCode: 500,
        message:
          err.message || `Some errors occur while finding receiving forms list`,
      });
    }
  },

  getRoofByBid: async (req, res, next) => {
    try {
      let { bid } = req.query;
      let b = await Roof.findOne({ bid: bid });
      return res.status(200).json(b);
    } catch (e) {
      return res.status(500).json({
        statusCode: 500,
        message:
          err.message || `Some errors occur while finding receiving forms list`,
      });
    }
  },

  getWindowByBid: async (req, res, next) => {
    try {
      let { bid } = req.query;
      let b = await Window.findOne({ bid: bid });
      return res.status(200).json(b);
    } catch (e) {
      return res.status(500).json({
        statusCode: 500,
        message:
          err.message || `Some errors occur while finding receiving forms list`,
      });
    }
  },

  getDoorByBid: async (req, res, next) => {
    try {
      let { bid } = req.query;
      let b = await Door.findOne({ bid: bid });
      return res.status(200).json(b);
    } catch (e) {
      return res.status(500).json({
        statusCode: 500,
        message:
          err.message || `Some errors occur while finding receiving forms list`,
      });
    }
  },
};
