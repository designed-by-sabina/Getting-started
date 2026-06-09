const API_KEY = config.WEATHER_API_KEY

let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
btn.addEventListener('click', getZipCode);

getWeatherData = (zip) => {
  let API_KEY = config.WEATHER_API_KEY;
  let API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${ZIP_CODE}&APPID=${API_KEY}`;



function getWeatherData(zip) {
fetch(API_ENDPOINT)
 .then(response => response.json())
 .then(data => {
  // store the data in a variable of our choosing
  let local_weather_data = data;
  // log the data to the browser console
  console.log(local_weather_data);
  });
.catch(error => console.error('Error fetching data:', error));
};    


const getZipCode = (e) => {
  e.preventDefault();
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
};

btn.addEventListener("click", getZipCode);
