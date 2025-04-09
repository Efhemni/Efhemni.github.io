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


    const postForm = document.getElementById("postForm");
    const postsSection = document.getElementById("postsSection");

    if (postForm) {
        postForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value.trim() || "Anonymous";
            const message = document.getElementById("message").value.trim();

            if (message) {

                const newPost = document.createElement("div");
                newPost.classList.add("post");
                newPost.innerHTML = `<p><strong>${username}:</strong> ${message}</p>`;


                postsSection.appendChild(newPost);


                postForm.reset();
            } else {
                alert("Please enter a message before posting.");
            }
        });
    }
});



window.onload = function() {
    const userName = sessionStorage.getItem('userName');

    if (userName) {
        document.getElementById('userNameDisplay').textContent = `Welcome, ${userName}`;

        document.getElementById('registerLink').style.display = 'none';
        document.getElementById('loginLink').style.display = 'none';

        document.getElementById('logoutButton').style.display = 'inline';

        document.getElementById('bookingSection').style.display = 'block';
    } else {
        document.getElementById('bookingSection').style.display = 'none';
    }

    document.getElementById('logoutButton').addEventListener('click', function() {
        sessionStorage.clear();
        location.reload();
    });
};




window.onload = function() {
    const userName = sessionStorage.getItem('userName'); 

   
    if (userName) {
        
        document.getElementById('userNameDisplay').textContent = `Welcome, ${userName}`;

       
        document.getElementById('registerLink').style.display = 'none';
        document.getElementById('loginLink').style.display = 'none';

        
        document.getElementById('logoutButton').style.display = 'inline';

                document.getElementById('bookingSection').style.display = 'block';
    } else {
                document.getElementById('bookingSection').style.display = 'none';
    }

    
    
    };
;