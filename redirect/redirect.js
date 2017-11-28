let dissapoint = document.querySelector('#dissapoint');
let houston = document.querySelector('#houston');
addEventListener('click', disappointment);


function disappointment() {
  dissapoint.innerHTML ='Why do you dissapoint me so?';
  let boom = 4;
  setInterval(function(){
    houston.innerText = boom;
    if (boom === 0) {
      let urls = [
        'http://www.speedhunters.com',
        'http://www.jalopnik.com',
        'http://www.build-threads.com',
        'http://www.high-top-fade.blogspot.com',
        'http://www.tokyonur.com',
        'http://www.petrolicious.com',
        'http://www.theoatmeal.com'];
      let index = Math.floor(Math.random()*urls.length);
      window.location = urls[index];
      }
      boom -= 1;
    }, 1000);
}


