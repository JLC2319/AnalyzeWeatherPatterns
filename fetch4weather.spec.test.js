const { getWeatherData: getHistoricalWeatherData, getCurrentWeatherData } = require('./fetch4weather')
require('dotenv').config();
const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY
console.log(OPEN_WEATHER_MAP_API_KEY)
const city = "Dallas"
const lat = "32.7", lon = "-96.7";
(async function () {
    let data = await getHistoricalWeatherData(lat, lon, (new Date('01/01/2022') - new Date(0))/1000, OPEN_WEATHER_MAP_API_KEY) //getCurrentWeatherData(lat, lon)

    console.log(data.data, console.log(new Date(data.data[0].dt*1000)))


})()