async function loadSpotlights() {
    const spotlightContainer = document.getElementById('spotlight-cards');

    // Display loading message
    spotlightContainer.innerHTML = '<p>Loading spotlight members...</p>';

    try {
        const response = await fetch('data/members.json'); // Replace with actual JSON file path
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const members = await response.json();

        // Filter "Gold" and "Silver" members
        const goldSilverMembers = members.filter(member => member.level === 'Gold' || member.level === 'Silver');

        // Handle no eligible members
        if (goldSilverMembers.length === 0) {
            spotlightContainer.innerHTML = '<p>No spotlight members available at the moment.</p>';
            return;
        }

        // Shuffle and select 2 or 3 random members
        const selectedMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Render selected members dynamically
        spotlightContainer.innerHTML = selectedMembers.map(member => {
            const defaultLogo = 'path/to/default-logo.png'; // Replace with your default image path
            const logo = member.logo || defaultLogo;
            const phone = member.phone || 'Phone number not provided';
            const address = member.address || 'Address not available';

            return `
                <div class="spotlight-card">
                    <img src="${logo}" alt="${member.name} company logo">
                    <h4>${member.name}</h4>
                    <p>Phone: ${phone}</p>
                    <p>Address: ${address}</p>
                    <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
                </div>
            `;
        }).join('');
    } catch (error) {
        console.error('Error fetching or processing data:', error);
        spotlightContainer.innerHTML = '<p>Failed to load spotlight members.</p>';
    }
}

// Call the function to load spotlights
loadSpotlights();