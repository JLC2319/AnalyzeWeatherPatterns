require('dotenv').config();
const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY

//locationObj: {city:String, lat:Number, lon:Number}
async function getWeatherData(city, lat, lon, type='hour', start= new Date('2012/01/01'), end= new Date('2022/01/01'),API_KEY= OPEN_WEATHER_MAP_API_KEY){
    const URL = `http://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&type=${type}&start=${start}&end=${end}&appid=${API_KEY}`

    return fetch(URL)
        .then((response) => (response.json()))
}


module.exports = getWeatherData
