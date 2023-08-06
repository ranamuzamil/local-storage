// Function to add a user to local storage
function addUser(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const id = document.getElementById('id').value;
  
    const user = {
      name: name,
      age: age,
      email: email,
      id: id
    };
  
    // Check if the user already exists with the given ID
    const existingUser = localStorage.getItem(id);
    if (existingUser) {
      alert('User with this ID already exists!');
      return;
    }
  
    // Save the user data to local storage
    localStorage.setItem(id, JSON.stringify(user));
  
    // Clear form fields
    document.getElementById('userForm').reset();
  
    // Update the user list on the screen
    displayUsers();
  }
  
  // Function to delete a user by ID
  function deleteUser(id) {
    localStorage.removeItem(id);
    displayUsers();
  }
  
  // Function to display the list of users on the screen
  function displayUsers() {
    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = '';
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const userData = JSON.parse(localStorage.getItem(key));
  
      const listItem = document.createElement('li');
      listItem.innerHTML = `<b>Name:</b> ${userData.name}, <b>Age:</b> ${userData.age}, <b>Email:</b> ${userData.email}, <b>ID:</b> ${userData.id}
                            <button onclick="deleteUser(${userData.id})">Delete</button>`;
      userListElement.appendChild(listItem);
    }
  }
  
  // Event listener for form submission
  document.getElementById('userForm').addEventListener('submit', addUser);
  
  // Display the existing users on page load
  displayUsers();
  