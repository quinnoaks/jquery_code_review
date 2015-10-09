$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var favorite1Input = $("input#favorite1").val();
    var favorite2Input = $("input#favorite2").val();
    var favorite3Input = $("input#favorite3").val();
    var favorite4Input = $("input#favorite4").val();
    var favorite5Input = $("input#favorite5").val();

    $(".name1").text(name1Input);
    $(".favorite1").text(favorite1);
    $(".favorite2").text(favorite2);
    $(".favorite3").text(favorite3);
    $(".favorite4").text(favorite4);
    $(".favorite5").text(favorite5);

    $("#favlist").show();

    event.preventDefault();
  });

});
