const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b9f924d45bmsh96c015b49be87f0p15d93djsn1e81bf284c6f',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};


const getWeather = (city)=>{
  cityName.innerHTML = city
  async function fetchData() {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
  
      // Select the elements by their IDs
      const cloud_pct = document.getElementById('cloud_Pct');
      const temp = document.getElementById('temp');
      const feels_like = document.getElementById('feels_like');
      const humidity = document.getElementById('Humidity');
      const min_temp = document.getElementById('min_temp');
      const max_temp = document.getElementById('max_temp');
      const wind_speed = document.getElementById('Wind_speed');
      const wind_degrees = document.getElementById('Wind_degrees');
      const sunrise = document.getElementById('Sunrise');
      const sunset = document.getElementById('Sunset');
  
      // Update the content of the selected elements with weather data
      cloud_pct.innerHTML = data.cloud_pct;
      temp.innerHTML = data.temp;
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      min_temp.innerHTML = data.min_temp;
      max_temp.innerHTML = data.max_temp;
      wind_speed.innerHTML = data.wind_speed;
      wind_degrees.innerHTML = data.wind_degrees;
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
  
      console.log(data);
      console.log(cloud_pct, temp, feels_like, humidity, min_temp, max_temp, wind_speed, wind_degrees, sunrise, sunset);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
}

submit.addEventListener("click",(e)=>{
  e.preventDefault()
 getWeather(city.value)
})

getWeather("Mumbai")

