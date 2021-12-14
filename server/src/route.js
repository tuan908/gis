import express from "express";
import controller from "./controller.js"

const router = express.Router();
router.get("/getBuildingById", controller.getBuildingById );
router.get("/getBaseByBid", controller.getBaseByBid);
router.get("/getRoofByBid", controller.getRoofByBid);
router.get("/getDoorByBid", controller.getDoorByBid);
router.get("/getWindowByBid", controller.getWindowByBid);

export default router;