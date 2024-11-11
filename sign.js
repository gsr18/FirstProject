function validateSignIn() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const signinMessage = document.getElementById('signinMessage');

    // Basic validation for email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        signinMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    // Check if password is entered
    if (password === "") {
        signinMessage.textContent = "Password cannot be empty.";
        return false;
    }

    // Display success message (in a real application, you'd send a request to the server here)
    signinMessage.style.color = 'green';
    signinMessage.textContent = "Signing in...";

    // Reset form after "signing in"
    setTimeout(() => {
        document.getElementById('signinForm').reset();
        signinMessage.textContent = "";
    }, 2000);

    return false; // Prevent actual form submission for demonstration
}
