import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/get/get", async (req, res) => {
    try {
        const city_name = req.query.city_name.trim().toLowerCase();
        
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=58c768bef938b2a29db3c01b7877fe03`);

        console.log("response", response.data);

    } catch (error) {
        console.log("ERROR", error);
        res.status(500).send({ success: false });
    }
});

app.listen(3000, () => console.log("Running on localhost http://localhost:3000"));