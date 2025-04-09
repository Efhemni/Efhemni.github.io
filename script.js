document.addEventListener("DOMContentLoaded", function() {
    const registerLink = document.getElementById("registerLink");
    const loginLink = document.getElementById("loginLink");
    const logoutButton = document.getElementById("logoutButton");
    const userNameDisplay = document.getElementById("userNameDisplay");
    const storedUsername = sessionStorage.getItem("username");
    const storedPassword = sessionStorage.getItem("password");

    const displayUserName = () => {
        if (storedUsername) {
            if (userNameDisplay) {
                userNameDisplay.textContent = `Welcome, ${storedUsername}!`;
            }
            registerLink.style.display = "none";
            loginLink.style.display = "none";
            logoutButton.style.display = "inline-block";
        } else {
            registerLink.style.display = "inline-block";
            loginLink.style.display = "inline-block";
            logoutButton.style.display = "none";
        }
    };

    displayUserName();

    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("password");
            window.location.href = "index.html";
        });
    }

    const sessionBookingForm = document.getElementById("sessionBookingForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    if (sessionBookingForm) {
        sessionBookingForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const psychiatrist = document.getElementById("psychiatrist").value;
            const sessionTime = document.getElementById("sessionTime").value;

            if (storedUsername && psychiatrist && sessionTime) {
                confirmationMessage.style.display = "block";
                sessionBookingForm.reset();
            } else {
                alert("Please log in and fill in all details.");
            }
        });
    }

    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value;
            if (username && password) {
                sessionStorage.setItem("username", username);
                sessionStorage.setItem("password", password);
                window.location.href = "index.html";
            } else {
                alert("Please fill in both username and password.");
            }
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("loginUsername").value.trim();
            const password = document.getElementById("loginPassword").value;

            if (username === storedUsername && password === storedPassword) {
                window.location.href = "index.html";
            } else {
                alert("Invalid username or password.");
            }
        });
    }
});


// Check if the user is logged in by checking sessionStorage
window.onload = function() {
    const userName = sessionStorage.getItem('userName'); // Get the stored username from sessionStorage

    // If the user is logged in
    if (userName) {
        // Show the logged-in user's name
        document.getElementById('userNameDisplay').textContent = `Welcome, ${userName}`;

        // Hide Register and Login buttons
        document.getElementById('registerLink').style.display = 'none';
        document.getElementById('loginLink').style.display = 'none';

        // Show the logout button
        document.getElementById('logoutButton').style.display = 'inline';

        // Show the booking section
        document.getElementById('bookingSection').style.display = 'block';
    } else {
        // If the user is not logged in, hide the booking section
        document.getElementById('bookingSection').style.display = 'none';
    }

    // Logout functionality
    document.getElementById('logoutButton').addEventListener('click', function() {
        // Clear sessionStorage on logout
        sessionStorage.clear();
        // Reload the page to reflect the changes
        location.reload();
    });
};



// Check if the user is logged in by checking sessionStorage
window.onload = function() {
    const userName = sessionStorage.getItem('userName'); // Get the stored username from sessionStorage

    // If the user is logged in
    if (userName) {
        // Show the logged-in user's name
        document.getElementById('userNameDisplay').textContent = `Welcome, ${userName}`;

        // Hide Register and Login buttons
        document.getElementById('registerLink').style.display = 'none';
        document.getElementById('loginLink').style.display = 'none';

        // Show the logout button
        document.getElementById('logoutButton').style.display = 'inline';

        // Show the booking section
        document.getElementById('bookingSection').style.display = 'block';
    } else {
        // If the user is not logged in, hide the booking section
        document.getElementById('bookingSection').style.display = 'none';
    }

    // Logout functionality
    
    };
;