
$(document).ready(function() {

   function newGame () {

        var targetNumber;

      //  var random = Math.floor(Math.random)() * 10 + 1;
       var random = Math.floor(Math.random() * 40) + 1;
            targetNumber = random;
        console.log("is this random " + targetNumber);

    };
});

///create four random numbers

var numberOptions = "";
for (var i = 0; i < 4; i++) {
    var randomNumbers = math.floor(math.random() * 10) + 1;

numberOptions = randomNumbers + numberOptions;
}
//down below is where we push those four random numbers into an array
////pseudo code \\\\
///creating the crystals on the screen


//var numberOptions = [a random number, similar to the tloterry generator ]

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