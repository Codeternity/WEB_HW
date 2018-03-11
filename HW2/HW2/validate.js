$(document).ready(function() {

  var $s1 = $("<span></span>");
  var $s2 = $("<span></span>");
  var $s3 = $("<span></span>");

  var nmReg = new RegExp('^[a-zA-Z0-9]+$');
  //var nmReg = new RegExp('^\\w+$');
  var emlReg = new RegExp('^[a-zA-Z0-9._]+@[a-zA-Z0-9_-]+[\.]{1}[a-zA-Z]{3}$');


  $("#username").focus(function(){
    $s1.html("The username field must contain only alphabetical or numeric characters.");
    $s1.removeClass().addClass("info");
    $(this).after($s1);
  });

  $("#username").blur(function(){
    if($("#username").val().length == 0){
      $s1.remove();
    }
    else if(nmReg.test($("#username").val())){

      $s1.html("OK");
      $s1.removeClass().addClass("ok");
      $(this).after($s1);
    }
    else{
      $s1.html("ERROR");
      $s1.removeClass().addClass("error");
      $(this).after($s1);
    }
  });


  $("#password").focus(function(){
    $s2.html("The password field should be at least 8 characters long.");
    $s2.removeClass().addClass("info");
    $(this).after($s2);
  });

  $("#password").blur(function(){
    if($("#password").val().length == 0){
      $s2.remove();
    }
    else if($("#password").val().length < 8){
      $s2.html("ERROR");
      $s2.removeClass().addClass("error");
      $(this).after($s2);
    }
    else{
      $s2.html("OK");
      $s2.removeClass().addClass("ok");
      $(this).after($s2);
    }
  });

  $("#email").focus(function(){
    $s3.html("The email field should be a valid email address (abc@def.xyz)");
    $s3.removeClass().addClass("info");
    $(this).after($s3);
  });

  $("#email").blur(function(){
    if($("#email").val().length == 0){
      $s3.remove();
    }
    else if(emlReg.test($("#email").val())){
      $s3.html("OK");
      $s3.removeClass().addClass("ok");
      $(this).after($s3);
    }
    else{
      $s3.html("ERROR");
      $s3.removeClass().addClass("error");
      $(this).after($s3);
    }
  });

});
