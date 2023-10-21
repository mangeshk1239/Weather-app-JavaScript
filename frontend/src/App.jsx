import * as M from '@mui/material';
import * as React from "react";
import imagesMap from './assets/weatherImagesHashMap';

function App() {
  const [cityName, setCityName] = React.useState("");
  const [data, setData] = React.useState(null);
  const [backgroundImage, setBackgroundImage] = React.useState(null);

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  React.useEffect(() => {
    if (data?.cityWeather) {
      console.log(data?.cityWeather);
      setBackgroundImage(imagesMap[data?.cityWeather]);
    }
  }, [data]);

  return (
    <div className="weatherApp" style={styles}>
      <M.TextField onChange={(e) => setCityName(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
      <M.Button variant="contained" onClick={handleGetWeather}>Submit</M.Button>
    </div>
  )

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