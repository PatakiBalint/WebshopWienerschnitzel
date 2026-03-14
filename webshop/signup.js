const newUser = document.getElementById("newusername");
const newPass = document.getElementById("newpassword");

async function signup() {
    const newProfile = {
        username : newUser.value,
        password : newPass.value
    }

    await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProfile)
      });
}