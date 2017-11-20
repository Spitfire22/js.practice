

function http_get(url, success) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let data = JSON.parse(xhttp.responseText);
      success(data);
    }
  }
  xhttp.open("GET", url)
  xhttp.send();
}

let city_name = Portland

loadWeather()
function loadWeather() {
    http_get("api.openweathermap.org/data/2.5/weather?q=" + page, function (data) {
        console.log(data)
    });
}
