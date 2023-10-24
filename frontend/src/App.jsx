import * as M from '@mui/material';
import * as React from "react";

function App() {
  const [cityName, setCityName] = React.useState("");
  const [data, setData] = React.useState(null);

  const styles = {
    boxComponent: {
      width: "100%",
      padding: "50px",
      borderRadius: "25px",
      textAlign: "center",
      background: "#282928",
      color: "white"
    },
    gridComponent: {
      padding: "0!important",
      margin: "0!important",
      alignItems: "center!important"
    }
  };

  return (
    <M.Box sx={styles.boxComponent}>
      <M.Grid container spacing={2} sx={styles.gridComponent}>
        <M.Grid item xs={8} md={8} lg={8}>
          <M.TextField color="success" fullWidth onChange={(e) => setCityName(e.target.value)} id="outlined-basic" label="Enter any City name" variant="outlined" sx={{ borderRadius: "50px" }} />
        </M.Grid>
        <M.Grid item xs={4} md={4} lg={4}>
          <M.Button variant="contained" onClick={handleGetWeather}>Submit</M.Button>
        </M.Grid>
      </M.Grid>
      {
        data != null
          ?
          <M.Grid container spacing={2} sx={styles.gridComponent} >
            <M.Grid item xs={12} md={12} sx={styles.gridComponent}>
              <M.Typography variant="h5" sx={styles.gridComponent}>
                {data.cityWeather.charAt(0).toUpperCase() + data.cityWeather.slice(1)}
              </M.Typography>
            </M.Grid>
            <M.Grid item xs={12} md={12} sx={styles.gridComponent}>
              <img src={data.cityWeatherIcon} width={"20%"} style={{ margin: "0" }} />
            </M.Grid>
            <M.Grid item xs={12} md={12} sx={styles.gridComponent}>
              <M.Typography variant="h3" sx={styles.gridComponent}>
                {data.cityTemp}&deg;C
              </M.Typography>
            </M.Grid>
            <M.Grid item xs={12} md={12} sx={styles.gridComponent}>
              <M.Typography variant="h3" sx={styles.gridComponent}>
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