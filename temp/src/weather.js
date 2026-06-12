async function getWeather(latitude, longitude) {
    try {
        // First, get the grid coordinates and location info from lat/lon
        const pointResponse = await fetch(
            `https://api.weather.gov/points/${latitude},${longitude}`
        );
        const pointData = await pointResponse.json();
        
        // Get the location info
        const locationInfo = {
            city: pointData.properties.relativeLocation.properties.city,
            state: pointData.properties.relativeLocation.properties.state
        };
        
        // Then get the forecast using the grid coordinates
        const forecastResponse = await fetch(pointData.properties.forecastHourly);
        const forecastData = await forecastResponse.json();
        
        // Get current conditions from the first period
        const currentConditions = forecastData.properties.periods[0];
        
        return {
            temperature: {
                f: Math.round(currentConditions.temperature),
                c: Math.round((currentConditions.temperature - 32) * 5/9)
            },
            description: currentConditions.shortForecast,
            location: locationInfo
        };
    } catch (error) {
        console.error('Error fetching weather:', error);
        return {
            error: 'Weather data unavailable'
        };
    }
}

function getWeatherEmoji(description) {
    if (description.includes('sunny')) return '☀️';
    if (description.includes('clear')) return '🌙';
    if (description.includes('partly cloudy')) return '⛅';
    if (description.includes('cloudy')) return '☁️';
    if (description.includes('rain')) return '🌧️';
    if (description.includes('shower')) return '🌦️';
    if (description.includes('thunderstorm')) return '⛈️';
    if (description.includes('snow')) return '🌨️';
    if (description.includes('fog') || description.includes('mist')) return '🌫️';
    return '🌡️';
} 