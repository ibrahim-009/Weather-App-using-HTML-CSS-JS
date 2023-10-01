const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0496d61416msh5cb103bb6896b35p1c8a1ejsnca320f6fe2cd',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  }
};


const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
   .then(response => response.json())
   .then((response) => {
        console.log(response);
        cloud_pct.innerHTML = response.cloud_pct;
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
     wind_speed2.innerHTML = response.wind_speed;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
    })    
      .catch((err) => console.log(err));
}

// Tokyo
const getWeather_Tokyo = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
   .then(response => response.json())
   .then((response) => {
        console.log(response);
     cloud_pct_1.innerHTML = response.cloud_pct;
     feels_like_1.innerHTML = response.feels_like;
     humidity_1.innerHTML = response.humidity;
     max_temp_1.innerHTML = response.max_temp;
     min_temp_1.innerHTML = response.min_temp;
     sunrise_1.innerHTML = response.sunrise;
     sunset_1.innerHTML = response.sunset;
     wind_speed_1.innerHTML = response.wind_speed;
        temp_1.innerHTML = response.temp;
        temp2_1.innerHTML = response.temp;
        humidity2_1.innerHTML = response.humidity;
        wind_speed2_1.innerHTML = response.wind_speed;
    })    
      .catch((err) => console.log(err));
}

// Mumbai
const getWeather_Mumbai = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
   .then(response => response.json())
   .then((response) => {
        console.log(response);
     cloud_pct_2.innerHTML = response.cloud_pct;
     feels_like_2.innerHTML = response.feels_like;
     humidity_2.innerHTML = response.humidity;
     max_temp_2.innerHTML = response.max_temp;
     min_temp_2.innerHTML = response.min_temp;
     sunrise_2.innerHTML = response.sunrise;
     sunset_2.innerHTML = response.sunset;
     wind_speed_2.innerHTML = response.wind_speed;
        temp_2.innerHTML = response.temp;
        temp2_2.innerHTML = response.temp;
        humidity2_2.innerHTML = response.humidity;
        wind_speed2_2.innerHTML = response.wind_speed;
    })
      .catch((err) => console.log(err));
}

// Paris
const getWeather_Paris = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
   .then(response => response.json())
   .then((response) => {
        console.log(response);
     cloud_pct_3.innerHTML = response.cloud_pct;
     feels_like_3.innerHTML = response.feels_like;
     humidity_3.innerHTML = response.humidity;
     max_temp_3.innerHTML = response.max_temp;
     min_temp_3.innerHTML = response.min_temp;
     sunrise_3.innerHTML = response.sunrise;
     sunset_3.innerHTML = response.sunset;
     wind_speed_3.innerHTML = response.wind_speed;
        temp_3.innerHTML = response.temp;
        temp2_3.innerHTML = response.temp;
        humidity2_3.innerHTML = response.humidity;
        wind_speed2_3.innerHTML = response.wind_speed;
    })
      .catch((err) => console.log(err));
}


// Dubai
const getWeather_Dubai = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
   .then(response => response.json())
   .then((response) => {
        console.log(response);
     cloud_pct_4.innerHTML = response.cloud_pct;
     feels_like_4.innerHTML = response.feels_like;
     humidity_4.innerHTML = response.humidity;
     max_temp_4.innerHTML = response.max_temp;
     min_temp_4.innerHTML = response.min_temp;
     sunrise_4.innerHTML = response.sunrise;
     sunset_4.innerHTML = response.sunset;
     wind_speed_4.innerHTML = response.wind_speed;
        temp_4.innerHTML = response.temp;
        temp2_4.innerHTML = response.temp;       
        humidity2_4.innerHTML = response.humidity;           
        wind_speed2_4.innerHTML = response.wind_speed;       
    })
      .catch((err) => console.log(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

window.addEventListener("load", (e) => {
  e.preventDefault();
  getWeather_Tokyo("Tokyo");
  getWeather_Mumbai("Mumbai"); 
  getWeather_Paris("Paris"); 
  getWeather_Dubai("Dubai");
  getWeather("Lucknow");
})
