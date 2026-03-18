const newUser = document.getElementById("newusername");
const newPass = document.getElementById("newpassword");

async function signup() {
    const newProfile = {
        username : newUser.value,
        password : newPass.value
    }
    if (!newProfile.username || !newProfile.password) {
        alert("Username and password cannot be empty!");
        return; 
    }

    await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProfile)
      });
    alert(`Welcome ${newUser.value}!`)
}