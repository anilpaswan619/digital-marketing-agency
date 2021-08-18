const inputEmail = document.getElementById('email');
const inputFname = document.getElementById('firstname');
const inputLname = document.getElementById('lastname');

inputEmail.onkeypress = function(){
    document.getElementById('workemail').innerText = "Work Email";
   
}
inputFname.onkeypress = function(){
    
    document.getElementById('fname').innerText = "First Name";
  
}
inputLname.onkeypress = function(){
  
    document.getElementById('lname').innerText = "Last Name";
}