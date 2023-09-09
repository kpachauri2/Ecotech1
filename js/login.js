// function onSignIn(googleUser) {
//     // Get user information
//     var profile = googleUser.getBasicProfile();
//     console.log("ID: " + profile.getId()); // User ID
//     console.log("Name: " + profile.getName()); // User's name
//     console.log("Email: " + profile.getEmail()); // User's email

//     // You can use the user information to perform actions like registration or login.

//     // Example: Redirect to a welcome page after successful sign-in
//     window.location.href = "welcome.html";
// }

function onSignIn(googleUser) {
    // Handle Google Sign-In (use the onSignIn function from previous code)
}

// Add JavaScript code to handle form submission (e.g., sending login data to the server)
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input (email and password) and send it to your server for authentication
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Example: Send the data to the server using fetch or AJAX
    fetch("/login-endpoint", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(function (response) {
        if (response.ok) {
            // Redirect the user to the dashboard or another page upon successful login
            window.location.href = "dashboard.html";
        } else {
            // Handle login error (e.g., display an error message)
            alert("Login failed. Please check your credentials.");
        }
    })
    .catch(function (error) {
        console.error("Error:", error);
    });
});