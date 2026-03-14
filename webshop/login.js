function LocalData(){
      const data = JSON.parse(localStorage.getItem('users')) || [];
      render(data);
    }
async function login() {
    const user = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();

    console.log(data);
    
     const foundUser = data.find(u => 
        u.username === user && u.password === password
    );

    if(foundUser){
        alert("Login successful!");
        localStorage.setItem("loggedUser", JSON.stringify(foundUser));
    } else {
        alert("Wrong username or password");
    }
}
    