
let getWeather = async (city) => {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

let showWeather = async (city) => {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later");
    return;
  }

  const weatherMain = data.weather?.[0]?.main ?? "N/A";
  const iconUrl = data.weather?.[0]?.icon ?? "N/A";
  const temp = data.main?.temp ?? "N/A";
  const feelsLike = data.main?.feels_like ?? "N/A";
  const humidity = data.main?.humidity ?? "N/A";
  const windSpeed = data.wind?.speed ?? "N/A";
  const windGust = data.wind?.gust ?? "N/A";
  const locationName = data.name ?? "N/A";

  document.getElementById("weather-icon").src = iconUrl;
  document.getElementById("weather-main").textContent = weatherMain;
  document.getElementById("main-temperature").textContent = temp;
  document.getElementById("feels-like").textContent = feelsLike;
  document.getElementById("humidity").textContent = humidity;
  document.getElementById("wind").textContent = windSpeed;
  document.getElementById("wind-gust").textContent = windGust;
  document.getElementById("location").textContent = locationName;
};

document.getElementById("get-weather-btn").addEventListener("click", () => {
  const selectedCity = document.getElementById("city-select").value;
  if (selectedCity !== "") {
    showWeather(selectedCity);
  }
});