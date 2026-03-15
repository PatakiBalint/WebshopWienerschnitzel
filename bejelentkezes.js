async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const newUser = document.querySelector("username");
    const newPassword = document.querySelector("password");
    
    const response = await fetch("localhost/bejelentkezes.json");
    const users = await response.json();

    users.push({
        username: newUser,
        password: newPassword
    });

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (user) {
        localStorage.setItem("loggedInUser", username);
        alert("Login successful");
    } else {
        alert("Invalid login");
    }
}