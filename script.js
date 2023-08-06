let userList = document.getElementById("user-list");
let addUser = document.getElementById("add-user");
let deleteUser = document.getElementById("delete-user");
let loginUser = document.getElementById("login-user");

let listBtn = document.getElementById("list-btn");
let addBtn = document.getElementById("add-btn");
let deleteBtn = document.getElementById("delete-btn");
let loginBtn = document.getElementById("login-btn");



if (userList.textContent === null) {
    userList.innerHTML = "Storage is empty"        
}
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  item.addEventListener('click', function () {
    navItems.forEach((navItem) => {
      navItem.classList.remove('active');
    });
    this.classList.add('active');
  });
});


listBtn.addEventListener("click", ()=> {
  userList.style.display = "block"
  addUser.style.display = "none"
  deleteUser.style.display = "none"
  loginUser.style.display = "none"
})
addBtn.addEventListener("click", ()=> {
  userList.style.display = "none"
  addUser.style.display = "block"
  deleteUser.style.display = "none"
  loginUser.style.display = "none"
})
deleteBtn.addEventListener("click", ()=> {
  userList.style.display = "none"
  addUser.style.display = "none"
  deleteUser.style.display = "block"
  loginUser.style.display = "none"
})
loginBtn.addEventListener("click", ()=> {
  userList.style.display = "none"
  addUser.style.display = "none"
  deleteUser.style.display = "none"
  loginUser.style.display = "block"
})





// Function to handle login attempt
function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the credentials match (You can use AJAX to authenticate with the server here)
  if (checkCredentials(username, password)) {
    // Store the user as logged in
    localStorage.setItem('loggedInUser', username);
    alert('Login successful!');
    // Redirect to a logged-in page or perform other actions
  } else {
    alert('Invalid credentials. Please try again.');
  }
}

// Function to check if the credentials are valid
function checkCredentials(username, password) {
  // In a real-world scenario, you would compare these credentials with the server's database
  // For this example, we are using a hard-coded username and password
  const validUsername = 'user123';
  const validPassword = 'pass123';
  return username === validUsername && password === validPassword;
}

// Add an event listener to the form for login submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', login);
