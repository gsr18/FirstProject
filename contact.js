function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Basic validation for empty fields
    if (name === "" || email === "" || message === "") {
        confirmationMessage.style.color = 'red';
        confirmationMessage.textContent = "All fields are required.";
        return false;
    }

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        confirmationMessage.style.color = 'red';
        confirmationMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    // Show confirmation message
    confirmationMessage.style.color = 'green';
    confirmationMessage.textContent = "Thank you for your message! We’ll get back to you soon.";
    
    // Clear form fields after submission
    document.getElementById('contactForm').reset();
    return false; // Prevent actual form submission for demonstration
}
