


const input = document.querySelector(".enter_city");
const search = document.querySelector(".icon");
const weatherImg = document.querySelector("#weather_img");
const dettel = document.querySelector("#dettel");
const humidity = document.querySelector(".humidity_persent");
const speed = document.querySelector(".speed_persent");
const notFond = document.querySelector(".notFond");
const main = document.querySelector(".main");
const conttener = document.querySelector(".conttener")


async function weatherCall(cityName){
  const apiKey = "ff59d7d086ec5e6320274244dad39aec";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  const weatherData = await fetch(`${url}`).then(respon => respon.json())
  if(weatherData.cod === `404`){
    notFond.style.display = "block";
    main.style.display = "none";
    conttener.style.background = "gainsboro";
    return
  }else{
    conttener.style.background = "linear-gradient(-10deg, rgb(3, 255, 184),rgb(81, 62, 223))";
    notFond.style.display = "none";
    main.style.display = "block";
    dettel.innerHTML = `<h1 class="temper">${Math.round(weatherData.main.temp - 273.15)}<i class="ri-celsius-line"></i> <h2 class="city"> ${weatherData.weather[0].description} </h2></h1>`
    humidity.innerHTML = `${weatherData.main.humidity} %`;
    speed.innerHTML = `${weatherData.wind.speed} km/h`;
   
  switch (weatherData.weather[0].main){
    case 'Clouds': 
    weatherImg.src = "image/cloud.png"
    break
    case 'Clear':
    weatherImg.src = "image/clear.png"
    break
    case 'Rain': 
    weatherImg.src = "image/Rain.png"
    break
    case 'Mist':
    weatherImg.src = "image/Mist.png"
    break
    case 'Snow':
    weatherImg.src = "image/Snow.png"
    break
  }
  }
}

search.addEventListener("click",()=>{
 weatherCall(input.value)
})