/// <reference path="../public/vendor/jquery/dist/jquery.js" />

function alertSomething (sMsg) {
  alert(sMsg);
}

sso.executeOnce(alertSomething, null, "Hello world!!!!", "alert_something");


function submitForm(){
  $.post('http://localhost:8080/api/authenticat', )
}

