/**
 * @typedef {Object} CalendarDay
 * @property {number} date - Day of the month
 * @property {boolean} isCurrentMonth - Whether day is in current month
 * @property {boolean} isToday - Whether day is today
 */

/**
 * Generates and displays the calendar
 * @returns {void}
 */
function generateCalendar() {
    const date = new Date();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const currentDay = date.getDate();

    // Set calendar header
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    document.getElementById('calendar-month').textContent = 
        `${monthNames[currentMonth]} ${currentYear}`;

    const calendarGrid = document.querySelector('.calendar-grid');
    
    // Store weekday headers
    const weekdayHTML = `
        <div class="weekday">Su</div>
        <div class="weekday">Mo</div>
        <div class="weekday">Tu</div>
        <div class="weekday">We</div>
        <div class="weekday">Th</div>
        <div class="weekday">Fr</div>
        <div class="weekday">Sa</div>
    `;

    // Reset grid with weekday headers
    calendarGrid.innerHTML = weekdayHTML;

    // Get first day of month and total days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Add padding days from previous month
    const prevMonthLastDate = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = 0; i < firstDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day other-month';
        dayDiv.textContent = prevMonthLastDate - firstDay + i + 1;
        calendarGrid.appendChild(dayDiv);
    }

    // Add days of current month
    for (let i = 1; i <= lastDate; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        if (i === currentDay) {
            dayDiv.classList.add('today');
        }
        dayDiv.textContent = i;
        calendarGrid.appendChild(dayDiv);
    }

    // Add padding days from next month
    const totalCells = Math.ceil((firstDay + lastDate) / 7) * 7;
    const remainingCells = totalCells - (firstDay + lastDate);
    for (let i = 1; i <= remainingCells; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day other-month';
        dayDiv.textContent = i;
        calendarGrid.appendChild(dayDiv);
    }
} 

/**
 * Gets the last day of a given month
 * @param {number} year - Year
 * @param {number} month - Month (0-11)
 * @returns {number} Last day of the month
 */
function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}