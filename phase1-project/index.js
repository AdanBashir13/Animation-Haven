// Fetch data from the Dog CEO's Dog API
fetch('https://dog.ceo/api/breeds/image/random/5')
    .then(response => response.json())
    .then(data => {
        // Select dog pet cards
        const petCards = document.querySelectorAll('#dogs .pet-profile img');
        // Update dog pet cards with fetched dog images
        petCards.forEach((img, index) => {
            img.src = data.message[index];
            img.alt = 'Dog';
        });
    })
    .catch(error => console.error('Error fetching dog data:', error));

// Fetch data from The Cat API
fetch('https://api.thecatapi.com/v1/images/search?limit=5')
    .then(response => response.json())
    .then(data => {
        // Select cat pet cards
        const petCards = document.querySelectorAll('#cats .pet-profile img');
        // Update cat pet cards with fetched cat images
        petCards.forEach((img, index) => {
            img.src = data[index].url;
            img.alt = 'Cat';
        });
    })
    .catch(error => console.error('Error fetching cat data:', error));
