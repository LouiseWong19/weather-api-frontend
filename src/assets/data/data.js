export const weather = {
  location: {
    name: "London",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    tz_id: "Europe/London",
    localtime_epoch: 1645007075,
    localtime: "2022-02-16 10:24",
  },
  current: {
    last_updated_epoch: 1645006500,
    last_updated: "2022-02-16 10:15",
    temp_c: 13.0,
    temp_f: 55.4,
    is_day: 1,
    condition: {
      text: "Overcast",
      icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
      code: 1009,
    },
    wind_mph: 20.6,
    wind_kph: 33.1,
    wind_degree: 250,
    wind_dir: "WSW",
    pressure_mb: 998.0,
    pressure_in: 29.47,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 77,
    cloud: 100,
    feelslike_c: 10.7,
    feelslike_f: 51.2,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 3.0,
    gust_mph: 25.5,
    gust_kph: 41.0,
  },
};

export default weather;