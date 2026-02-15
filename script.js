// script.js

// Function to fetch data from an API and display it
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        // Example of processing data
        displayData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to display data in a specific format
function displayData(data) {
    const displayArea = document.getElementById('data-display');
    displayArea.innerHTML = '';
    data.forEach(item => {
        const element = document.createElement('div');
        element.textContent = item.name; // Example property
        displayArea.appendChild(element);
    });
}

// Event listener for button click to fetch data
document.getElementById('fetch-button').addEventListener('click', () => {
    fetchData('https://api.example.com/data'); // Example API endpoint
});
