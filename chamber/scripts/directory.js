// Update year and last modified date dynamically
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Member list toggle elements
const memberList = document.getElementById("member-list");
const gridViewBtn = document.getElementById("grid-view-btn");
const listViewBtn = document.getElementById("list-view-btn");

// Error handling for missing elements
if (!memberList || !gridViewBtn || !listViewBtn) {
    console.error("One or more elements are missing from the DOM.");
}

// Members data
const members = [
    { name: "Business One", info: "Sustainability-focused environmental solutions" },
    { name: "Company Two", info: "Handcrafted goods and unique designs" }
];

// Function to display members
function displayMembers(view) {
    memberList.innerHTML = "";
    members.forEach((member, index) => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");
        memberCard.innerHTML = `<h3>${member.name}</h3><p>${member.info}</p>`;
        memberCard.setAttribute("data-index", index);
        memberCard.classList.add("loaded"); // Add class for CSS transitions
        memberList.appendChild(memberCard);
    });
    memberList.className = view;
}

// Add ARIA attributes for accessibility
gridViewBtn.setAttribute("aria-pressed", false);
listViewBtn.setAttribute("aria-pressed", true);

// Event listeners for view toggle
gridViewBtn.addEventListener("click", () => {
    displayMembers("grid");
    gridViewBtn.setAttribute("aria-pressed", true);
    listViewBtn.setAttribute("aria-pressed", false);
});

listViewBtn.addEventListener("click", () => {
    displayMembers("list");
    gridViewBtn.setAttribute("aria-pressed", false);
    listViewBtn.setAttribute("aria-pressed", true);
});

// Default view
document.addEventListener("DOMContentLoaded", () => {
    displayMembers("grid");
});