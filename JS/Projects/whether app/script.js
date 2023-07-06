// Get the elements
const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const iconElement = document.getElementById("icon");

// API key and base URL
const apiKey = "6a1d156a9a1e8ed6f1c7bb8134275b73";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather data from the API
function fetchWeatherData(city) {
  const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeatherData(data);
    })
    .catch(error => {
      console.log("Error fetching weather data:", error);
    });
}

// Function to display weather data
function displayWeatherData(data) {
  if (data.cod === "404") {
    locationElement.textContent = "City not found";
    temperatureElement.textContent = "";
    descriptionElement.textContent = "";
    iconElement.innerHTML = "";
  } else {
    locationElement.textContent = data.name + ", " + data.sys.country;
    temperatureElement.textContent = data.main.temp + "°C";
    descriptionElement.textContent = data.weather[0].description;

    // Display weather icon
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    iconElement.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
  }
}

// Add event listener to the search button
searchButton.addEventListener("click", function() {
  const city = cityInput.value.trim();
  if (city !== "") {
    fetchWeatherData(city);
  }
});

// Add event listener to the input field to allow searching by pressing Enter key
cityInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    const city = cityInput.value.trim();
    if (city !== "") {
      fetchWeatherData(city);
    }
  }
});
