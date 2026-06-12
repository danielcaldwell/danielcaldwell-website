function getFormattedDateTime() {
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    };

    const date = new Date();
    
    // Get formatted date and timezone in one call
    const formattedDateTime = date.toLocaleString('en-US', {
        ...options,
        timeZoneName: 'short'
    });

    // Extract timezone abbreviation from the end
    const timeZoneAbbr = formattedDateTime.split(' ').pop();

    // Keep the full formatted date/time without the timezone
    const formattedDate = formattedDateTime.slice(0, -4).trim();

    // Get 24-hour time directly from date object
    const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

    return `${formattedDate} (${time}) ${timeZoneAbbr}`;
}
