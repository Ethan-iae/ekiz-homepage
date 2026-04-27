var launchDate = new Date(2026, 2, 26, 0, 0);

function updateUptime() {
    var now = new Date();
    var diff = now - launchDate;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    var uptimeElement = document.getElementById("uptime");
    if (uptimeElement) {
        uptimeElement.innerText = days + " days, " + hours + " hrs";
    }
}

updateUptime();