
function updateTimer() {
    future = Date.parse("Dec 19, 2027 11:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div><div class="p-3 timer-content"><p class="mb-1 fs-12 text-fixed-white flex-fill">DYS</p><h5 class="fw-semibold text-fixed-white mb-0 flex-fill">' + d + '</h5></div></div>' +
        '<div><div class="p-3 timer-content"><p class="mb-1 fs-12 text-fixed-white flex-fill">HRS</p><h5 class="fw-semibold text-fixed-white mb-0 flex-fill">' + h + '</h5></div></div>' +
        '<div><div class="p-3 timer-content"><p class="mb-1 fs-12 text-fixed-white flex-fill">MINS</p><h5 class="fw-semibold text-fixed-white mb-0 flex-fill">' + m + '</h5></div></div>' +
        '<div><div class="p-3 timer-content"><p class="mb-1 fs-12 text-fixed-white flex-fill">SECS</p><h5 class="fw-semibold text-fixed-white mb-0 flex-fill">' + s + '</h5></div></div>'
}
setInterval('updateTimer()', 1000);

const snowContainer = document.getElementById('snow-container');
const numberOfSnowflakes = 100;

for (let i = 0; i < numberOfSnowflakes; i++) {
    createSnowflake();
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Random size between 2 and 5
    const size = Math.random() * 5 + 2;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Random horizontal position
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;

    // Append snowflake to the container
    snowContainer.appendChild(snowflake);

    // Random animation duration (between 2 and 5 seconds)
    const duration = Math.random() * 3 + 2;
    snowflake.style.animationDuration = `${duration}s`;

    // Set the animation to trigger and clean up after it ends
    snowflake.addEventListener('animationend', () => {
        snowflake.remove(); // Remove the snowflake after it falls
        createSnowflake(); // Create a new snowflake
    });
}