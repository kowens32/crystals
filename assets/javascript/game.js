
$(document).ready(function() {

    $(".img-responsive").on("click", function () {
        var targetNumber;

      //  var random = Math.floor(Math.random)() * 10 + 1;
       var random = Math.floor(Math.random() * 20) + 1;

        console.log("is this random " + random);

    });
});



////pseudo code \\\\
///creating the crystals on the screen

var numberOptions = [a random number, similar to the tloterry generator ]

for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $(<"img">);

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src","http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);

    $(".crystal-image").on("click", function (){

        var crystalValue = ($(this)).attr("data-crystalValue"));
    crystalValue = parseInt(CrystalVaule);

    counter += crystalValue;




})




}