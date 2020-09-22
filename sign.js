var logged = false;
//Sign up
var password = document.getElementById("password2")
, confirm_password = document.getElementById("password3");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;


function welcomeUser() {
    var username = document.getElementById("username").value;
    if (username == "") {
        alert("Username must not be left empty");
        return false;
    }
    alert("Welcome back, " + username + "!");
  logged = true;
  sessionStorage.setItem("logged",true);
}

function checkAdmin() {
    welcomeUser();
    var adminUsername = document.getElementById("username");
    var adminPassword = document.getElementById("password");
    if (adminUsername.value == "admin" && adminPassword.value == "Admin123") {
        setTimeout(function() {window.location.href="admin.html"},0);
    } 
    
    }


//Admin Page
function changeMode() {

   document.body.style.background='black';
}

/*
function logSwap()
{
  var log = sessionStorage.getItem("logged");
  if(log){
    var iBtn = document.querySelectorAll(".Logi");
    for(let i=0 ; i< iBtn.length ;i++){
      iBtn[i].style.display = "none";
    }    
    var oBtn = document.querySelectorAll(".logO");
    for(let i=0 ; i< oBtn.length ;i++){
      oBtn[i].style.display = "block";
    }

  }
  else{
    var iBtn = document.querySelectorAll(".Logi");
    for(let i=0 ; i< iBtn.length ;i++){
      iBtn[i].style.display = "block";
    }
    var oBtn = document.querySelectorAll(".logO");
    for(let i=0 ; i< oBtn.length ;i++){
      oBtn[i].style.display = "none";
    }
  }
}
document.logSwap();

function logOut()
{
  sessionStorage.setItem("logged", false);
  alert("Come back later!");
  var iBtn = document.querySelectorAll(".Logi");
  for(let i=0 ; i< iBtn.length ;i++){
    iBtn[i].style.display = 'none';
  }
}*/
