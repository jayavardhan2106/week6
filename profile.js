window.onload = function () {
    let username = localStorage.getItem("username");
    let email = localStorage.getItem("email");

    if (username && email) {
        document.getElementById('userInfo').innerText = `Username: ${username}, Email: ${email}`;
    } else {
        alert("You need to log in first.");
        window.location.href = "login.html";
    }
};

function updateProfile() {
    let newUsername = document.getElementById('newUsername').value.trim();
    let newEmail = document.getElementById('newEmail').value.trim();

    if (newUsername === '' && newEmail === '') {
        alert("Please enter a new username or email.");
        return false;
    }

    if (newUsername) {
        localStorage.setItem("username", newUsername);
    }

    if (newEmail) {
        localStorage.setItem("email", newEmail);
    }

    alert("Profile updated!");
    return false;
}
