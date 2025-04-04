const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const loginForm = document.getElementById('loginForm');

// Add click events for register and login buttons to toggle the 'active' class
if (registerBtn && container) {
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });
}

if (loginBtn && container) {
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const usernameField = document.getElementById("username");
        const passwordField = document.getElementById("password");
        const errorMessage = document.getElementById("error-message");

        if (usernameField && passwordField) {
            const username = usernameField.value;
            const password = passwordField.value;

            // Simple validation check
            if (username === "user@email.com" && password === "password") {
                window.location.href = "./movie.html"; // Redirect to the movie page
            } else if (errorMessage) {
                errorMessage.textContent = "Invalid username or password!";
            }
        } else {
            console.error("Username or password field is missing in the DOM.");
        }
    });
}
