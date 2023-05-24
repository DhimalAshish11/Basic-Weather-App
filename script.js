const apiKey = "8653ef06ecd9a955955b7e01edf57aa7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    /* if (data.checkWeather[0].main == "Clouds") {
      weatherIcon.src =
        "C:UsersyonyaOneDriveDesktopBasic weather appclouds.png";
    } else if (data.checkWeather[0].main == "Clear") {
      weatherIcon.src = "C:UsersyonyaOneDriveDesktopBasic weather appclear.png";
    } else if (data.checkWeather[0].main == "Drizzle") {
      weatherIcon.src =
        "C:UsersyonyaOneDriveDesktopBasic weather appdrizzle.png";
    } else if (data.checkWeather[0].main == "Mist") {
      weatherIcon.src = "C:UsersyonyaOneDriveDesktopBasic weather appmist.png";
    } */

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
