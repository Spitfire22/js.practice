// this is the function to get the API url
// readyState of 4 means DONE, HTTP status code of 200 is a standard response for successful request
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

let photo_list = document.querySelector('#photo_list');

http_get("https://reqres.in/api/users?page=1", function(data) {
  console.log(data)
  for (let i=0; i<data.data.length; ++i) {
    let first_name = data.data[i].first_name;
    let last_name = data.data[i].last_name;
    let img_url = data.data[i].avatar;
    let outer_div = document.createElement('div');
    outer_div.id = 'div'+i;
    outer_div.classList.add('photo_entry');
    let name_header = document.createElement('h4');
    name_header.innerText = first_name +' '+ last_name;
    outer_div.appendChild(name_header);
    let img = document.createElement('img');
    img.src = img_url;
    outer_div.appendChild(img);
    photo_list.appendChild(outer_div);
  }
});

//What I am to do now is make the pages change the api page request.
// this is step two of the lab. buttons are created but have no IDs