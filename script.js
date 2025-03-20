function validateForm(){
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
let nameError=document.getElementById("nameError");
let emailError=document.getElementById("emailError");
let passwordError=document.getElementById("passwordError");
nameError.textContent="";
emailError.textContent= "";
passwordError.textContent= "";
let isValid=true;
if(name.trim()===""){
nameError.textContent="Name is required";
isValid=false;
}
if(email.trim()===""){
emailError.textContent = "email is required";
isValid=false;
}else if(!/\S+@\S+\.\S+/.test(email)){
emailError.textContent="Invalid email format";
isValid = false;
}
if(password.trim() ===""){
passwordError.textContent = "Password is required";
isValid = false;
}
else if(password.length<6){
passwordError.textContent="Password must be at least 6 characters";
isValid = false;
}
if(isValid){
alert("Login successful!");
}
}
