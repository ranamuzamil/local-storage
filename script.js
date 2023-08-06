let userList = document.getElementById("user-list");
let addUser = document.getElementById("add-user");
let deleteUser = document.getElementById("delete-user");
let loginUser = document.getElementById("login-user");
let userDisplay = document.getElementById("display");

let adduserInter = document.getElementById("add-user-interface");
let listuserInter = document.getElementById("add-list-inter");
let deleteuserInter = document.getElementById("delete-user-inter");
let logineuserInter = document.getElementById("login-user-inter");

let userResultDiv = document.getElementById("result");

let delBtn = document.getElementById("del-btn")


let userForm = document.querySelector("#user-form");
userForm.addEventListener('submit', function(event){
  event.preventDefault();
  
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("e-mail").value;
  let id = document.getElementById("id").value;
  let submit = document.getElementById("submit")

  submit.addEventListener('click',() =>{

    
    let userData = {
      firstname : firstName,
      lastname : lastName,
      email : email,
      id : id
    }

    let storedData = localStorage.getItem('userData');
    storedData = storedData ? JSON.parse(storedData) : [];
    
    // Add the new form data to the array
    storedData.push(userData);
    
    
    localStorage.setItem('userData', JSON.stringify(storedData));
    
    // Clear the form fields
    userForm.reset();   
    alert('Form data stored successfully!');    
  })  
})
setInterval(() => {
  let displaybefore = localStorage.getItem('userData')
  if (displaybefore === null) {
    userResultDiv.innerHTML = "STORAGE IS EMPTY"
  } else {
    userResultDiv.innerHTML = displaybefore    
  }
}, 1000);
delBtn.addEventListener("click", ()=>{
  localStorage.clear()
})




addUser.addEventListener("click", ()=>{
    adduserInter.style.display = "block"
    listuserInter.style.display = "none"
    deleteuserInter.style.display = "none"
    logineuserInter.style.display = "none"
    userDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
    }
)
userList.addEventListener("click", ()=>{
    listuserInter.style.display = "block"
    adduserInter.style.display = "none"
    deleteuserInter.style.display = "none"
    logineuserInter.style.display = "none"
    userDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
})
deleteUser.addEventListener("click", ()=>{
  deleteuserInter.style.display = "flex"
  listuserInter.style.display = "none"
    adduserInter.style.display = "none"
    logineuserInter.style.display = "none"
    userDisplay.style.backgroundColor = "rgba(210, 0, 0, 0.4)"
})
loginUser.addEventListener("click", ()=>{
  logineuserInter.style.display = "flex"
  deleteuserInter.style.display = "none"
  listuserInter.style.display = "none"
    adduserInter.style.display = "none"
    userDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
})


// Get all navigation items
const navItems = document.querySelectorAll('.nav-item');

// Add event listener to each navigation item
navItems.forEach((item) => {
  item.addEventListener('click', function () {
    // Remove the active class from all items
    navItems.forEach((navItem) => {
      navItem.classList.remove('active');
    });

    // Add the active class to the clicked item
    this.classList.add('active');
  });
});