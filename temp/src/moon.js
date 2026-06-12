async function getMoonInfo(latitude, longitude, datetime) {
    // Format the datetime to YYYY-MM-DD
    const date = datetime.toISOString().split('T')[0]; // Convert to ISO string and extract the date part
    const url = `https://aa.usno.navy.mil/api/rstt/oneday?date=${date}&coords=${latitude},${longitude}`;
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.properties || !data.properties.data) {
            throw new Error("Unable to retrieve moon information");
        }

        const moonData = data.properties.data;

        // Current phase and illumination
        const currentPhase = moonData.curphase;
        const fracIllumination = moonData.fracillum;

        // Map current phase to emoji
        const moonPhases = {
            "New Moon": "🌑",
            "Waxing Crescent": "🌒",
            "First Quarter": "🌓",
            "Waxing Gibbous": "🌔",
            "Full Moon": "🌕",
            "Waning Gibbous": "🌖",
            "Last Quarter": "🌗",
            "Waning Crescent": "🌘"
        };

        const currentPhaseEmoji = moonPhases[currentPhase] || '🌑'; // Default to New Moon if phase not found

        // Closest phase information
        const closestPhase = moonData.closestphase;
        const closestPhaseDate = new Date(`${closestPhase.year}-${String(closestPhase.month).padStart(2, '0')}-${String(closestPhase.day).padStart(2, '0')}T${closestPhase.time}`);
        const daysUntilClosestPhase = Math.ceil((closestPhaseDate - new Date()) / (1000 * 60 * 60 * 24));

        // Moon times
        const moonTimes = {
            rise: moonData.moondata.find(phen => phen.phen === "Rise")?.time || 'No rise time found',
            set: moonData.moondata.find(phen => phen.phen === "Set")?.time || 'No set time found',
            upperTransit: moonData.moondata.find(phen => phen.phen === "Upper Transit")?.time || 'No upper transit time found'
        };

        // Fetch moon phases data to calculate days until next phases
        const phasesResponse = await fetch(`https://aa.usno.navy.mil/api/moon/phases/date?date=${date}&nump=4`);
        const phasesData = await phasesResponse.json();

        if (!phasesData || !phasesData.phasedata) {
            throw new Error("Unable to retrieve moon phases data");
        }

        // Calculate days until next moon phases
        const nextPhases = {};
        const currentDate = new Date();

        phasesData.phasedata.forEach(phase => {
            const phaseDate = new Date(`${phase.year}-${String(phase.month).padStart(2, '0')}-${String(phase.day).padStart(2, '0')}T${phase.time}`);
            const daysUntilPhase = Math.ceil((phaseDate - currentDate) / (1000 * 60 * 60 * 24));
            nextPhases[phase.phase] = {
                nextDate: phaseDate.toISOString().split('T')[0], // Format to YYYY-MM-DD
                daysUntil: daysUntilPhase
            };
        });

        return {
            currentPhase: currentPhase,
            currentPhaseEmoji: currentPhaseEmoji,
            fracIllumination: fracIllumination,
            daysUntilClosestPhase: daysUntilClosestPhase,
            moonrise: moonTimes.rise,
            moonset: moonTimes.set,
            upperTransit: moonTimes.upperTransit,
            nextPhases // Return all next phases data
        };
    } catch (error) {
        console.error("Error details:", error); // Log the error details
    }
}
