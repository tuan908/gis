import Base from './entity/Base.js';
import Building from './entity/Building.js';
import Door from './entity/Door.js';
import Roof from './entity/Roof.js';
import Window from './entity/Window.js';

export default {
  getBuildingById: async (req, res, next) => {
    try {
      let { id } = req.query;
      let bd = await Building.findOne({ _id: id });
      return res.status(200).json(bd);
    } catch (e) {
      return res.status(500).json({
        statusCode: 500,
        message: `Some errors occur while finding receiving forms list`,
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
