
$(document).ready(function() {

   // function newGame () {
var counter = 0;
        var targetNumber;

      //  var random = Math.floor(Math.random)() * 10 + 1;
       var random = Math.floor(Math.random() * 40) + 10;
            targetNumber = random;
        console.log("is this random " + targetNumber);
       $(".test").text(targetNumber);
   // };

///create four random numbers

var numberOptions = [];
for (var i = 0; i < 4; i++) {
    var randomNumbers = Math.floor(Math.random() * 10) + 1;

numberOptions = randomNumbers + numberOptions;

console.log("i need four numbers "+ numberOptions);

}
//down below is where we push those four random numbers into an array
////pseudo code \\\\
///creating the crystals on the screen


//var numberOptions = [a random number, similar to the tloterry generator ]

for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");


    imageCrystal.attr("src", "http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    console.log(numberOptions);

    $(".test").append(imageCrystal);
}

    $(".crystal-image").on("click", function (){

        var crystalValue = ($(this).attr("data-crystalValue"));
   crystalValue = parseInt(crystalValue);
console.log("what is my "+crystalValue);

     counter += crystalValue;
        $(".counter").text(counter);

console.log("counter "+counter);


        if (counter === targetNumber) {
            alert("You win!");
        }
        else if (counter >= targetNumber) {
            alert("You lose!!");
        }

})



    // newGame();



});
