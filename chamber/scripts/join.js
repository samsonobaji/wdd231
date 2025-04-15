// Function to show modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.error(`Modal with ID "${modalId}" not found.`);
        return;
    }
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.error(`Modal with ID "${modalId}" not found.`);
        return;
    }
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

// Keyboard accessibility: Close modal on Escape key press
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        const openModals = document.querySelectorAll(".modal.open");
        openModals.forEach((modal) => {
            modal.classList.remove("open");
            modal.setAttribute("aria-hidden", "true");
        });
    }
});

// Footer updates
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
});