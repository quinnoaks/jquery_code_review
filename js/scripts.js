$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var favorite1Input = $("input#favorite1").val();
    var favorite2Input = $("input#favorite2").val();
    var favorite3Input = $("input#favorite3").val();
    var favorite4Input = $("input#favorite4").val();
    var favorite5Input = $("input#favorite5").val();

    $(".name1").text(name1Input);
    $(".favorite1").text(favorite1Input);
    $(".favorite2").text(favorite2Input);
    $(".favorite3").text(favorite3Input);
    $(".favorite4").text(favorite4Input);
    $(".favorite5").text(favorite5Input);

    $("#favlist").show();

    event.preventDefault();
  });

});
