let userList = document.getElementById("user-list");
let addUser = document.getElementById("add-user");
let deleteUser = document.getElementById("delete-user");
let loginUser = document.getElementById("login-user");
let userDisplay = document.getElementById("display");

let adduserInter = document.getElementById("add-user-interface")
let listuserInter = document.getElementById("add-list-inter")
let userResultDiv = document.getElementById("result")



let userForm = document.querySelector("#user-form");
userForm.addEventListener('submit', function(event){
  event.preventDefault();
  
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("e-mail").value;
  let id = document.getElementById("id").value;

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
  form.reset();
})
 



addUser.addEventListener("click", ()=>{
    adduserInter.style.display = "block"
    listuserInter.style.display = "none"
    document.getElementById("display").style.backgroundColor = "rgba(0, 0, 0, 0.37)"
})
userList.addEventListener("click", ()=>{
    listuserInter.style.display = "block"
    adduserInter.style.display = "none"
    document.getElementById("display").style.backgroundColor = "rgba(0, 0, 0, 0.1)"

})
