console.log("this works");
const API_KEY = config.WEATHER_API_KEY

function getWeatherData() {
fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10128&APPID=${d59248058dfd6e856147f76f18c07b13}`)
 .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
  };

getWeatherData()

