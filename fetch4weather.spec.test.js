const getWeatherData = require('./fetch4weather')
require('dotenv').config();
const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY

const city = "Dallas"
const lat = "32.7", lon = "-96.7";
(async function() {
let data = await getWeatherData(city, lat, lon)

console.log(data)
})()