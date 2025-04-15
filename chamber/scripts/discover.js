// Function to check and display visitor message based on localStorage
window.addEventListener("load", function () {
    const visitorMessage = document.getElementById("visitor-message");

    // Ensure the visitorMessage element exists
    if (!visitorMessage) {
        console.error("Visitor message element is missing from the DOM.");
        return;
    }

    // Check for localStorage support
    if (typeof Storage === "undefined") {
        visitorMessage.textContent = "Welcome! Your browser does not support local storage.";
        return;
    }

    // Retrieve last visit data
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = new Date();

    if (!lastVisit || isNaN(lastVisit)) {
        // First-time visitor or invalid data
        visitorMessage.textContent = "Welcome! Feel free to reach out if you need any assistance.";
    } else {
        const lastVisitDate = new Date(parseInt(lastVisit, 10));
        const daysDifference = getDaysDifference(currentDate, lastVisitDate);

        if (daysDifference === 0) {
            visitorMessage.textContent = "Glad to be back! How can I assist you today?";
        } else if (daysDifference === 1) {
            visitorMessage.textContent = `You last visited 1 day ago.`;
        } else {
            visitorMessage.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }

    // Store the current visit date
    localStorage.setItem("lastVisit", Date.now().toString());
});

// Helper function to calculate the difference in days
function getDaysDifference(date1, date2) {
    const timeDifference = date1 - date2;
    return Math.floor(timeDifference / (1000 * 3600 * 24));
}