require('dotenv').config();
const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY

//locationObj: {city:String, lat:Number, lon:Number}
async function getHistoricalWeatherData(lat, lon, start= new Date('2022/08/15').getUTCMilliseconds(),API_KEY= OPEN_WEATHER_MAP_API_KEY){
    const URL = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${start}&appid=${API_KEY}`

    return fetch(URL)
        .then((response) => (response.json()))
}

async function getCurrentWeatherData(lat, lon,API_KEY= OPEN_WEATHER_MAP_API_KEY){
    const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&exclude=daily,minutely,hourly`

    return fetch(URL)
        .then((response) => (response.json())).then((data)=>(data.current)).then((data)=>{
            const transformedData = {
                dt: new Date(data.dt*1000).toTimeString().slice(0,8),
                sunrise: new Date(data.sunrise*1000).toTimeString().slice(0,8),
                sunset: new Date(data.sunset*1000).toTimeString().slice(0,8),
                temp: `${Math.round((data.temp-273.15)*(9/5)+32)} degrees`,
                feelsLike: `${Math.round((data.feels_like-273.15)*(9/5)+32)} degrees`,
                pressure: `${data.pressure} bar`,
                humidity: `${data.humidity}%`,
                dewPoint: `${Math.round((data.dew_point-273.15)*(9/5)+32)} degrees`,
                visibility: `${data.visibility} meters`,
                windSpeed: `${data.wind_speed} meters per second`,
                windDeg: `${data.wind_deg} degrees (meteorological)`,
                weatherDescription: `${data.weather.main} weather with a ${data.weather.description}`,
        
            }

            return transformedData
        
        })
}


module.exports = {getWeatherData: getHistoricalWeatherData, getCurrentWeatherData}
