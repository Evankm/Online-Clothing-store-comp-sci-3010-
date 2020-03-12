function validateForm() {

  if((chkEmail() &
  chkFirstName()&
  chkLastName()&
  chkAccountID()&
  chkPassword() &
  chkPhone()) == false){
    return false;
  }
  
} 

function chkFirstName(){
 
  var name = document.registration.First_Name.value;
  
  if (name ==  "") {
    document.getElementById("First_NameError").innerHTML = "Invalid name";
    return false;
  } 
  
  if (name[0] !=  name[0].toUpperCase()) {
    document.getElementById("First_NameError").innerHTML = "Must start with a capital letter";
    return false;
  } 

  for(var i =1; i < name.length; i++){
    if(name[i] == name[i].toUpperCase()){
      document.getElementById("First_NameError").innerHTML = "Charcters following the first charcter must be lowercase";
      console.log(name[i]);
      return false;
    }
  }
  return true;
}

function chkLastName(){
  var Lastname = document.registration.Last_Name.value;
  
  if (Lastname ==  "" ) {
    document.getElementById("Last_NameError").innerHTML = "Invalid name";
    return false;
  } 
  if (Lastname[0] !=  Lastname[0].toUpperCase()) {
    document.getElementById("Last_NameError").innerHTML = "Must start with a capital letter";
    return false;
  } 

   for(var i = 1; i < Lastname.length; i++){
    if(Lastname[i] == Lastname[i].toUpperCase()){
      document.getElementById("Last_NameError").innerHTML = "Charcters following the first charcter must be lowercase";
      return false;
    }
   }
    return true;
}

function chkAccountID(){
  var id = document.registration.Account_ID.value;

  if(id.length <= 1){
     document.getElementById("UserNameError").innerHTML = "Invalid username";
     return false;
  }

  if(id[0].toUpperCase() == id[0].toLowerCase()){
      document.getElementById("UserNameError").innerHTML = "Must start with letter";
      return false;
    }
     return true;
}

function chkPassword(){
  var password = document.registration.Password.value;

  if (password ==  "" ) {
    document.getElementById("PasswordError").innerHTML = "Invalid Password";
    return false;
  } 
  
  if (password[0] !=  password[0].toUpperCase()) {
    document.getElementById("PasswordError").innerHTML = "Must start with a capital letter";
    return false;
  } 

  if(password.length != 8){
    document.getElementById("PasswordError").innerHTML = "Must contain 7 charcters";
    return false;
  }

  if((/\d/.test(password[7])) == false){
     document.getElementById("PasswordError").innerHTML = "Last charcter must be a digit";
    return false;
  }
  return true;
}

function chkEmail(){
  var email = document.registration.Email.value;
  var reEmail = document.registration.ReEmail.value;

  if(email == ""){
    document.getElementById("EmailError").innerHTML = "Invalid Email";
    
  }

  if(reEmail == ""){
    document.getElementById("ReEmailError").innerHTML = "Invalid Email";
 
    return false;
  }
  
  if(email != reEmail){
    document.getElementById("ReEmailError").innerHTML = "Email must match";
    return false;
  }
  return true;
}

function chkPhone(){
  var phone = document.registration.Phone.value;

  if(phone == ""){
    return true;
  }

  if(/^[0-9]{10}$/.test(phone) == false){
    document.getElementById("PhoneError").innerHTML = "Must contain 10 digits";
    return false;
  }

  if((/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/).test(phone) == false){
    document.getElementById("PhoneError").innerHTML = "Must contain 10 digits";
    return false;
  }
   return true;
}