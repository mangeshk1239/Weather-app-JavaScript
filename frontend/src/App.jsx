import * as M from '@mui/material';
import * as React from "react";

function App() {
  const [cityName, setCityName] = React.useState("");
  const [data, setData] = React.useState(null);

  const styles = {
    width: "100%",
    height: "100px",
    padding: "100px"
  };

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
      {
        data != null
          ?
          <>
            <M.Grid container spacing={2} sx={{ alignItems: "center" }}>
              <M.Grid item xs={12} md={12}>
                <img src={data.cityWeatherIcon} width={100} height={100} />
              </M.Grid>
              <M.Grid item xs={12} md={12}>
                <M.Typography variant="h1" gutterBottom>
                  {data.cityTemp}
                </M.Typography>
              </M.Grid>
              <M.Grid item xs={12} md={12}>
                <M.Typography variant="h1" gutterBottom>
                  {data.cityName}
                </M.Typography>
              </M.Grid>
              <M.Grid item xs={12} md={12}>
                <M.Typography variant="h1" gutterBottom>
                  {data.cityWeather}
                </M.Typography>
              </M.Grid>
            </M.Grid>
          </>
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