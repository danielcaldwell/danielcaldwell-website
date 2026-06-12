function getLocation() {
    /**
     * Retrieves the user's current geographical location using the browser's geolocation API.
     * If successful, it returns an object with latitude, longitude, and a status message.
     * If unsuccessful, it returns an object with an error message.
     * If geolocation is not supported, it returns an object indicating that geolocation is not supported.
     */
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    
                    resolve({ latitude, longitude, status: 'Location retrieved successfully' });
                },
                error => {
                    console.error('Error getting location:', error);
                    reject({ status: error });
                }
            );
        } else {
            const errorMessage = 'Geolocation is not supported by this browser';
            reject({ status: errorMessage });
        }
    });
}

function getEarthEmojiByTimezone(date) {
    // Get the timezone offset in hours
    const timezoneOffset = date.getTimezoneOffset() / 60; // Convert to hours

    // Each hour corresponds to 15 degrees of longitude (360/24)
    // postitive offsets are to the left of GMT therefore negative
    // negative offsets are to the right of GMT therefore positive
    const longitude = timezoneOffset * 15 * -1; 
    
    return getEarthEmojiByLongitude(longitude);
}


function getEarthEmojiByLongitude(longitude) {
    // Determine the emoji based on longitude
    if (longitude >= 35 && longitude <= 180) {
        // Asia/Australia/Pacific: 🌏
        return '🌏';
    } else if (longitude >= -35 && longitude < 35) {
        // Europe/Africa view if unknown
        return '🌍';
    } else {
        // Americas: 🌎
        return '🌎';
    }
}


function getLocationAsDMS(latitude, longitude) {
    // Format coordinates to 4 decimal places for decimal degrees
    const formattedLat = latitude.toFixed(4);
    const formattedLong = longitude.toFixed(4);
    
    // Convert to degrees and minutes
    const latDegrees = Math.floor(Math.abs(latitude));
    const latMinutes = ((Math.abs(latitude) - latDegrees) * 60).toFixed(2);
    const longDegrees = Math.floor(Math.abs(longitude));
    const longMinutes = ((Math.abs(longitude) - longDegrees) * 60).toFixed(2);
    
    // Determine N/S and E/W
    const latDir = latitude >= 0 ? 'N' : 'S';
    const longDir = longitude >= 0 ? 'E' : 'W';
    
    // Create formatted strings
    return {
        latitudeDMS: `${latDegrees}° ${latMinutes}' ${latDir}`,
        longitudeDMS:  `${longDegrees}° ${longMinutes}' ${longDir}`
    }
}

// Add this helper function to format the time
function formatTime(date) {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleString('en-US', options);
}

async function calculateSunTimes(latitude, longitude, datetime) {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`);
    const data = await response.json();

    if (data.status !== "OK") {
        throw new Error("Unable to retrieve sun times");
    }

    const sunrise = new Date(data.results.sunrise);
    const sunset = new Date(data.results.sunset);
    const civilDawn = new Date(data.results.civil_twilight);
    const civilDusk = new Date(data.results.civil_twilight);
    const nauticalDawn = new Date(data.results.nautical_twilight);
    const nauticalDusk = new Date(data.results.nautical_twilight);
    const astronomicalDawn = new Date(data.results.astronomical_twilight);
    const astronomicalDusk = new Date(data.results.astronomical_twilight);

    // Determine the phase based on the input datetime
    const inputDateTime = new Date(datetime);
    let phase;

    if (inputDateTime < astronomicalDawn) {
        phase = "Before Astronomical Dawn";
    } else if (inputDateTime >= astronomicalDawn && inputDateTime < nauticalDawn) {
        phase = "Astronomical Dawn";
    } else if (inputDateTime >= nauticalDawn && inputDateTime < civilDawn) {
        phase = "Nautical Dawn";
    } else if (inputDateTime >= civilDawn && inputDateTime < sunrise) {
        phase = "Civil Dawn";
    } else if (inputDateTime >= sunrise && inputDateTime < sunset) {
        phase = "Daytime";
    } else if (inputDateTime >= sunset && inputDateTime < civilDusk) {
        phase = "Civil Dusk";
    } else if (inputDateTime >= civilDusk && inputDateTime < nauticalDusk) {
        phase = "Nautical Dusk";
    } else if (inputDateTime >= nauticalDusk && inputDateTime < astronomicalDusk) {
        phase = "Astronomical Dusk";
    } else {
        phase = "Night";
    }

    return { sunrise, sunset, phase };
}


function isDST(date) {
    // Get January offset (standard time)
    const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
    // Get current offset
    const current = date.getTimezoneOffset();
    // If current offset is less than January offset, we're in DST
    return current < jan;
}

