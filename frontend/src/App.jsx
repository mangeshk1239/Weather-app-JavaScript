import * as M from '@mui/material';
import * as React from "react";
import imagesMap from './assets/weatherImagesHashMap';

function App() {
  const [cityName, setCityName] = React.useState("");
  const [data, setData] = React.useState(null);
  const [backgroundImage, setBackgroundImage] = React.useState("https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?auto=compress&cs=tinysrgb&w=1600");

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    width: "100%",
    height: "100px",
    padding: "100px"
  };

  React.useEffect(() => {
    if (data?.cityWeather) {
      console.log(data?.cityWeather);
      setBackgroundImage(imagesMap[data?.cityWeather]);
    }
  }, [data]);

  return (
    <M.Box sx={styles}>
      <M.Grid container spacing={2} sx={{ alignItems: "center" }}>
        <M.Grid item xs={6} md={8}>
          <M.TextField onChange={(e) => setCityName(e.target.value)} id="outlined-basic" label="Enter any City name" variant="outlined" />
        </M.Grid>
        <M.Grid item xs={6} md={4}>
          <M.Button variant="contained" onClick={handleGetWeather}>Submit</M.Button>
        </M.Grid>
      </M.Grid>
    </M.Box>
  );

  async function handleGetWeather() {
    try {
      const response = await fetch(`/api/weather/get?city_name=${cityName}`).then(response => response.json());
      if (response.success) setData(response.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  }
}

export default App;