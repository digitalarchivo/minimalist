// Example JavaScript to fetch and display profile data
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    
    fetch('profiles.json')
        .then(response => response.json())
        .then(profiles => {
            const profileContainer = document.getElementById('profile-grid');
            profiles.forEach(profile => {
                profileContainer.appendChild(createProfileCard(profile));
            });
        });

    // Create profile cards
    function createProfileCard(profile) {
        const card = document.createElement('div');
        card.className = 'profile-card';
        card.innerHTML = `
            <img src="${profile.imageURL}" alt="${profile.name}" class="profile-image">
            <h2>${profile.name}</h2>
            <p>${profile.role}</p>
            <p>${profile.description}</p>
            <a href="${profile.twitterURL}" target="_blank">Twitter</a>
        `;
        return card;
    }
    
    // Add event listener for search functionality
    searchBox.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.profile-card');
        cards.forEach(card => {
            const name = card.querySelector('h2').textContent.toLowerCase();
            if (name.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
