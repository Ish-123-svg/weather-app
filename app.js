const apiKey = '771aa0e00d140f91e71953c5fd9acdfd';
const searchButton = document.getElementById('search');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weather-info');

searchButton.addEventListener('click', () => {
    const city = locationInput.value;
    if (city) {
        getWeatherData(city);
    }
});

function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
