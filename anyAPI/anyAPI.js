

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



loadWeather()
function loadWeather() {
    http_get("https://reqres.in/api/users?page=" + page, function (data) {
        console.log(data)

