export const weatherTestApiData = {
  request: {
    type: "City",
    query: "Dhaka, Bangladesh",
    language: "en",
    unit: "m",
  },
  location: {
    name: "Dhaka",
    country: "Bangladesh",
    region: "",
    lat: "23.723",
    lon: "90.409",
    timezone_id: "Asia/Dhaka",
    localtime: "2021-12-18 19:24",
    localtime_epoch: 1639855440,
    utc_offset: "6.0",
  },
  current: {
    observation_time: "01:24 PM",
    temperature: 25,
    weather_code: 113,
    weather_icons: [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png",
    ],
    weather_descriptions: ["Clear"],
    wind_speed: 11,
    wind_degree: 313,
    wind_dir: "NW",
    pressure: 1013,
    precip: 0,
    humidity: 49,
    cloudcover: 0,
    feelslike: 26,
    uv_index: 1,
    visibility: 10,
    is_day: "no",
  },
};