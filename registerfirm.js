// Redirects user to the homepage
function goToHomepage() {
    window.location.href = "index.html"; // Replace "homepage.html" with your actual homepage URL
}

// Handles form submission and redirects to the "Thank You" page
function handleSubmit(event) {
    event.preventDefault(); // Prevent actual form submission
    window.location.href = "submit.html"; // Redirect to thank you page
}
