import axios from "axios";

export async function getCityWeather(req, res) {
    try {
        const city_name = req.query.city_name.trim().toLowerCase();
        const response = await axios.get(`${process.env.WEATHER_API_HOST}/data/2.5/weather?q=${city_name}&appid=${process.env.WEATHER_API_APP_ID}`);

        if (response.status == 200) {
            const data = {
                cityName: response.data.name,
                cityTemp: ~~(response.data.main.temp - 273.15),
                cityWeather: response.data.weather[0].main.toLowerCase(),
                cityWeatherIcon: `${process.env.WEATHER_API_IMG_HOST}/img/wn/${response.data.weather[0].icon}@2x.png`
            };

            return res.status(200).send({ success: true, data });
        }
        return res.status(500).send({ success: false, message: "Something went wrong" });
    } catch (error) {
        console.log("ERROR", error);
        return res.status(500).send({ success: false, message: error.response.data });
    }
}