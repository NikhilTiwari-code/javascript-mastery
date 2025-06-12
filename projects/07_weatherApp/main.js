// main.js
const cityElement = document.querySelector(".city"); // Renamed for clarity
const dateElement = document.querySelector(".date");
const temperatureElement = document.querySelector(".temperature");
const descriptionElement = document.querySelector(".description");
const humidityValueElement = document.querySelector(".humidity-value");
const windSpeedElement = document.querySelector(".wind-speed");
const feelsLikeElement = document.querySelector(".feels-like-value");



const API_KEY = 'e8658e15d03242572048c116cb504409';

window.onload = function() {
    const defaultCity = 'Delhi';
    fetchWeatherData(defaultCity); // Pass string directly
};

async function fetchWeatherData(cityName) { // Renamed parameter
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        console.log(data);
        updateWeatherUI(data);
       
    } catch (error) {
        console.error('Fetch error:', error);
        cityElement.textContent = 'Error loading data';
    }
}
const mumbaiData = fetchWeatherData('Mumbai')
console.log(mumbaiData);


function updateWeatherUI(data) {
    cityElement.textContent = data.name;
    dateElement.textContent = new Date().toLocaleDateString();
    temperatureElement.textContent = `${data.main.temp}°C`;
    descriptionElement.textContent = data.weather[0].description;
    windSpeedElement.textContent = `${data.wind.speed} km/h`;
    humidityValueElement.textContent = `${data.main.humidity}%`;
    feelsLikeElement.textContent = `${data.main.feels_like}°C`;
   

}






const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    fetchWeatherData(searchInput.value);
}); 


