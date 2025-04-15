// scripts/weather.js
document.addEventListener('DOMContentLoaded', () => {
    const weatherSection = document.getElementById('weather');
    const forecastSection = document.getElementById('weather-forecast');

    // Replace 'the_API_KEY' with actual API key
    const apiKey = '019051a93d167cced4a106c06867004c';
    const city = new URLSearchParams(window.location.search).get('city') || 'Lagos'; // Allow city override via URL
    const units = new URLSearchParams(window.location.search).get('units') || 'metric'; // Allow units override via URL

    // Display loading message
    weatherSection.innerHTML = '<p>Loading current weather data...</p>';
    forecastSection.innerHTML = '<p>Loading forecast data...</p>';

    // Function to fetch current weather
    async function fetchWeather() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`);
            if (!response.ok) throw new Error(`Weather data not available: ${response.status}`);

            const data = await response.json();
            const temperature = data.main?.temp || "N/A";
            const weatherDescription = data.weather?.[0]?.description || "Data not available";
            const locationName = data.name || city;

            weatherSection.innerHTML = `
                <h2 role="heading" aria-level="2">Weather Information</h2>
                <p>Current Temperature in ${locationName}: ${temperature}°C</p>
                <p>Weather: ${weatherDescription}</p>
            `;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            weatherSection.innerHTML = `<p>Error loading weather: ${error.message}</p>`;
        }
    }

    // Function to fetch 5-day weather forecast
    async function fetchForecast() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`);
            if (!response.ok) throw new Error(`Forecast data not available: ${response.status}`);

            const data = await response.json();
            let forecastHTML = '<h2 role="heading" aria-level="2">5-Days Weather Forecast</h2><ul>';
            for (let i = 0; i < data.list.length; i += 8) { // 8 entries per day
                const date = data.list[i]?.dt_txt || "Date not available";
                const temperature = data.list[i]?.main?.temp || "N/A";
                const weatherDescription = data.list[i]?.weather?.[0]?.description || "Data not available";

                forecastHTML += `
                    <li>
                        Date: ${date}<br>
                        Temp: ${temperature}°C<br>
                        Weather: ${weatherDescription}
                    </li>
                `;
            }
            forecastHTML += '</ul>';
            forecastSection.innerHTML = forecastHTML;
        } catch (error) {
            console.error('Error fetching forecast data:', error);
            forecastSection.innerHTML = `<p>Error loading forecast: ${error.message}</p>`;
        }
    }

    // Call the functions
    fetchWeather();
    fetchForecast();
});