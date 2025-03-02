let countdownInterval;

function startCountdown() {
    // Get input values
    const days = parseInt(document.getElementById('days').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    // Calculate total time in seconds
    let totalTime = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;

    // Clear any existing interval
    clearInterval(countdownInterval);

    // Update the countdown every second
    countdownInterval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdownInterval);
            alert("Countdown finished!");
            return;
        }

        // Calculate days, hours, minutes, and seconds
        const daysRemaining = Math.floor(totalTime / 86400);
        const hoursRemaining = Math.floor((totalTime % 86400) / 3600);
        const minutesRemaining = Math.floor((totalTime % 3600) / 60);
        const secondsRemaining = totalTime % 60;

        // Update the display
        document.getElementById('countdown-days').textContent = String(daysRemaining).padStart(2, '0');
        document.getElementById('countdown-hours').textContent = String(hoursRemaining).padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = String(minutesRemaining).padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = String(secondsRemaining).padStart(2, '0');

        // Decrease total time by 1 second
        totalTime--;
    }, 1000);
}