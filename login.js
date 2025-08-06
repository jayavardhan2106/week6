function loginUser() {
    let email = document.getElementById('loginEmail').value.trim();
    let password = document.getElementById('loginPassword').value.trim();

    if (email === '' || password === '') {
        alert("Both email and password are required.");
        return false;
    }

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }

    return false;
}
