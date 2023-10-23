import * as M from '@mui/material';
import * as React from "react";

function App() {
  const [cityName, setCityName] = React.useState("");
  const [data, setData] = React.useState(null);

  const styles = {
    width: "100%",
    padding: "50px",
    backgroundColor: "blue",
    borderRadius: "25px",
    textAlign: "center"
  };

  return (
    <M.Box sx={styles}>
      <M.Grid container spacing={2} sx={{ alignItems: "center" }}>
        <M.Grid item xs={8} md={8} lg={8}>
          <M.TextField fullWidth onChange={(e) => setCityName(e.target.value)} id="outlined-basic" label="Enter any City name" variant="outlined" sx={{ borderRadius: "50px" }} />
        </M.Grid>
        <M.Grid item xs={4} md={4} lg={4}>
          <M.Button variant="contained" onClick={handleGetWeather}>Submit</M.Button>
        </M.Grid>
      </M.Grid>
      {
        data != null
          ?
          <M.Grid container spacing={2} sx={{ alignItems: "center" }}>
            <M.Grid item xs={12} md={12}>
              <M.Typography variant="h5" gutterBottom>
                {data.cityWeather.charAt(0).toUpperCase() + data.cityWeather.slice(1)}
              </M.Typography>
            </M.Grid>
            <M.Grid item xs={12} md={12}>
              <img src={data.cityWeatherIcon} width={"20%"} />
            </M.Grid>
            <M.Grid item xs={12} md={12}>
              <M.Typography variant="h3" gutterBottom>
                {data.cityTemp}&deg;C
              </M.Typography>
            </M.Grid>
            <M.Grid item xs={12} md={12} sx={{ padding: "0", margin: "0" }}>
              <M.Typography variant="h3" gutterBottom>
                {data.cityName}
              </M.Typography>
            </M.Grid>
          </M.Grid>
          :
          <></>
      }
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