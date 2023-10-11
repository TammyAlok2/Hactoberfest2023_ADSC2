const API_KEY = "43b2ee1a011e9ce75c22d223a57822ce";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

///Form Submit

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;

  getWeatherData(cityValue);

  console.log(getWeatherData());
});

// Getting Data Based on city
async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`
    );

    //Throw Error
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const details = [
      `Feels Like :${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}`,
      `Wind speed: ${data.wind.speed}`,
    ];

    weatherDataEl.querySelector(
      ".icon"
    ).innerHTML = ` <img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon" srcset="">
    `;

    weatherDataEl.querySelector(
      ".temperature"
    ).textContent = `${temperature} °C`;

    weatherDataEl.querySelector(".description").textContent = `${description}`;

    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => ` <div>${detail}</div>`)
      .join(" ");
  } catch (error) {
    console.log(error);
  }
}
