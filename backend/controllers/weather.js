import axios from "axios";

export async function getCityWeather(req, res) {
    try {

        const city_name = req.query.city_name.trim().toLowerCase();
        const response = await axios.get(`${process.env.WEATHER_API_HOST}/data/2.5/weather?q=${city_name}&appid=${process.env.WEATHER_API_APP_ID}`);

        res.status(200).send({ success: true, data: response.data });
    } catch (error) {
        console.log("ERROR", error);
        res.status(500).send({ success: false });
    }
}