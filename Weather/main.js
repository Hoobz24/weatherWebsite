var weather;
var url = "https://api.weatherbit.io/v2.0/current?city=Spokane&units=imperial&key=746dc2eaa8df4490bbe7b4fba7d25b61";
var forecast = "http://api.weatherbit.io/v2.0/forecast/daily/current?city=Spokane&units=imperial&days=4&key=746dc2eaa8df4490bbe7b4fba7d25b61";
var newUrl;
var newForecast;


function onPress(){
  newUrl = "https://api.weatherbit.io/v2.0/current?city=" + document.getElementById('loco').value +  "&units=imperial&key=746dc2eaa8df4490bbe7b4fba7d25b61";
  newForecast = "http://api.weatherbit.io/v2.0/forecast/daily/current?city=" + document.getElementById('loco').value + "&units=imperial&days=4&key=746dc2eaa8df4490bbe7b4fba7d25b61";
  getWeather(newUrl);
}

function getWeather(url, forecast){
  findurl = url

  fetch(findurl)
      .then(res => res.json())
      .then((out) => {
            console.log();
            document.getElementById('location').innerHTML = out.data[0].city_name + ", " + out.data[0].state_code;
            document.getElementById('temp').innerHTML = "Temperture: " + out.data[0].temp + " F";
            document.getElementById('clouds').innerHTML = "Weather: " + out.data[0].weather.description;

  }).catch(err => console.error(err));

  fetch(newForecast)
      .then(res => res.json())
      .then((out) => {

            document.getElementById('day1').innerHTML = out.data[0].valid_date;
            document.getElementById('day2').innerHTML = out.data[1].valid_date;
            document.getElementById('day3').innerHTML = out.data[2].valid_date;
            document.getElementById('day4').innerHTML = out.data[3].valid_date;

            document.getElementById('low1').innerHTML = "Low: " + out.data[0].low_temp + " F";
            document.getElementById('low2').innerHTML = "Low: " + out.data[1].low_temp + " F";
            document.getElementById('low3').innerHTML = "Low: " + out.data[2].low_temp + " F";
            document.getElementById('low4').innerHTML = "Low: " + out.data[3].low_temp + " F";

            document.getElementById('high1').innerHTML = "High: " + out.data[0].high_temp + " F";
            document.getElementById('high2').innerHTML = "High: " + out.data[1].high_temp + " F";
            document.getElementById('high3').innerHTML = "High: " + out.data[2].high_temp + " F";
            document.getElementById('high4').innerHTML = "High: " + out.data[3].high_temp + " F";



  }).catch(err => console.error(err));
}
