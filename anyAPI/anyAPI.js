
function http_get(url, success) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let data = JSON.parse(xhttp.responseText);
      success(data);
    }
  }
  xhttp.open("GET", url);
  xhttp.send();
}

//--------- id's from the html file

let display_city = document.querySelector('#display_city');
let city_warning = document.querySelector('#city_warning');
let returned_name = document.querySelector('#returned_name');
let returned_humidity = document.querySelector('#returned_humidity');
let returned_pressure = document.querySelector('#returned_pressure');
let returned_temp = document.querySelector('#returned_temp');
let returned_lat = document.querySelector('#returned_lat');
let returned_lon = document.querySelector('#returned_lon');
let returned_sunrise = document.querySelector('#returned_sunrise');
let returned_sunset = document.querySelector('#returned_sunset');
let returned_weathermain = document.querySelector('#returned_weathermain');
let returned_weathersub = document.querySelector('#returned_weathersub');
let returned_winddegree = document.querySelector('#returned_winddegree');
let returned_windspeed = document.querySelector('#returned_windspeed');
let returned_weathericon = document.querySelector('#returned_weathericon');

//--------------
// make these as choices on the main page.

let city_name = 'Portland';
// let unit_choice = 'metric';
let unit_choice = 'imperial';

//--------------


//-------------- parameters pulled from API
loadWeather();
function loadWeather() {
    http_get("http://api.openweathermap.org/data/2.5/weather?q=" + city_name +'&APPID='+ weather_key + '&units=' + unit_choice, function (data) {
        console.log(data);
        let loc_name = data.name;
        returned_name.innerText = loc_name;
        let humidity = data.main.humidity;
        returned_humidity.innerText = humidity + '%';
        let pressure = data.main.pressure;
        returned_pressure.innerText = pressure + ' ' + 'in/wc';
        let temperature = data.main.temp;
        returned_temp.innerText = temperature + ' ' + '\u2109';
        let latitude = data.coord.lat;
        returned_lat.innerText = latitude + ' latitude';
        let longitude = data.coord.lon;
        returned_lon.innerText = longitude + ' longitude';
        let sunrise = data.sys.sunrise;
        returned_sunrise.innerText = 'Sunrise is at '+sunrise;
        let sunset = data.sys.sunset;
        returned_sunset.innerText = 'Sunset is at '+sunset;

        let weather = '';
        for (let i=0; i<data.weather.length; ++i) {
            weather += data.weather[i].main + ' ';
        }
        let weathermain = weather;
        returned_weathermain.innerText = weathermain;

        let weathericon = '';
        for (let i=0; i<data.weather.length; ++i) {
            weather += data.weather[i].id + ' ';
        }
        let weatherimage = weathericon;
        returned_weathericon.innerText = weatherimage;

        let winddegree = data.wind.deg;
        returned_winddegree.innerText = winddegree + ' degree of wind approach';
        let windspeed = data.wind.speed;
        returned_windspeed.innerText = 'wind speed ' + windspeed + ' mph';
    });
}
