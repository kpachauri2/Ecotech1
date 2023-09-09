

function onSignIn(googleUser) {
    // Handle Google Sign-In (use the onSignIn function from previous code)
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr("src",profile.getImage());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none");
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("you have been signed our successfully");
      $(".g-signin2").css("display","block");
      $(".data").css("display","none");
    });
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