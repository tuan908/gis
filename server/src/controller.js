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
        bds.forEach( async bd => {
          let base = await Base.findOne({ bid: bd._id });
          if(base) {
            let floor = renderFloor(base.rings.length - 1, base.rings)
            let wall = renderWall(base.rings.length - 1, base.rings)
            let line = renderLine(bd.lineCount - 2, base.rings.length - 1, base.rings)
            let ringNumber = base.rings.length - 1
            let lineNumber = bd.lineCount
            let baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic
            buildings.push({ ringNumber, lineNumber, baseGraphic, roofGraphic, floorGraphic, wallGraphic, lineGraphic, base, floor, wall, line })
          }

          if(bds.indexOf(bd) === bds.length - 1) return res.status(200).json(buildings);
        })
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
