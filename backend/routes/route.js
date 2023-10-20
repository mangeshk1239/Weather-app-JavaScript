import express from "express";
import cors from "cors";
import * as weatherController from "../controllers/weather.js";

const router = express.Router();
router.use(cors());

router.get("/weather/get", weatherController.getCityWeather);

export default router;