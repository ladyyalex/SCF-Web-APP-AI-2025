// Theme Toggle Functionality
const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
});

// Collapsible Section Functionality
const toggleButton = document.getElementById('toggleContent');
const content = document.getElementById('moreContent');

toggleButton.addEventListener('click', () => {
    if (content.style.display === "none") {
        content.style.display = "block";
        toggleButton.textContent = "Show Less";
    } else {
        content.style.display = "none";
        toggleButton.textContent = "Show More";
    }
});
