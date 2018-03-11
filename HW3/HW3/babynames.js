$(document).ready(function(){

  $("#button").click(function(e){

    $user_data = {"gender": $("#gender").val(), "year": $("#year").val()};
    var request = $.ajax({
          url: "babynames.php",
          method: "POST",
          data: $user_data,
          dataType: "html",
          timeout: "1000"
    });

    request.done(function( msg ) {
      $( "#name_list" ).html( msg );
    });
    request.fail(function( jqXHR, textStatus ) {
      alert( "Request failed: " + textStatus );
    });

  });

});
