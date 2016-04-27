/*
* Basic HTML password form using jQuery to hide show elements on the dom in certain scenarios. 
* 
*/
//Grab id elements(#) from index.html 
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide all password hints
$("form span").hide();

function verifyPassword(){  
    if($password.val().length > 8) {
      //if password length greater than 8 hide hint if valid
      $password.next().hide();
    } else {
      $password.next().show();
    }
}

function confirmPassword() {
  //Find out if password and confirmation strictly match
  if($password.val() === $confirmPassword.val()) {
    //Hide hint
    $confirmPassword.next().hide();
  } else { 
    $confirmPassword.next().show();
  }
}

//invoke functions when focus or keypress events on password input
$password.focus(verifyPassword).keyup(verifyPassword).focus(confirmPassword).keyup(confirmPassword);

//invoke functions when focus or keypress events on confrim password input
$confirmPassword.focus(confirmPassword).keyup(confirmPassword);









