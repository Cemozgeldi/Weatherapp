const inputArea = document.querySelector(".inputValue");
const inputButton = document.querySelector(".button");
const cityName = document.querySelector(".name");
const cityTemp = document.querySelector(".temp");
const cityDesc = document.querySelector(".desc");
const cityHumid = document.querySelector(".humid");
const citywind = document.querySelector(".wind");

inputButton.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputArea.value +
      "&appid=13c036c0f71d362c2b33621b7bd029f4"
  )
    .then((response) => response.json())
    .then((data) => {
      const tempValue = data["main"]["temp"] - 274.15;
      const nameValue = data["name"];
      const descValue = data["weather"][0]["description"];
      const humidValue = data["main"]["humidity"];
      const windValue = data["wind"]["speed"];

      cityName.innerHTML = "City : " + nameValue;
      cityTemp.innerHTML = Math.ceil(tempValue) + " C°";
      cityDesc.innerHTML = "Description : " + descValue;
      cityHumid.innerHTML = "Humidity : " + humidValue + "%";
      citywind.innerHTML = "Wind : " + windValue + "km/h";

      inputArea.value = "";
    })
    .catch((err) => "Could not find a City name like this.");
});
