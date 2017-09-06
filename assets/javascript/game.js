
$(document).ready(function() {
    //Setting universal variables
    var counter = 0;
    var wins = 0;
    var targetNumber;
    //function newGame generates the target number to beat
    function newGame () {
        counter = 0;
        var random = Math.floor(Math.random() * 40) + 10;
        targetNumber = random;
        console.log("is this random " + targetNumber);
        $(".targetNumber").html(targetNumber);
    ///function newGame create four random numbers for me to assign to the crystals
        var numberOptions = [];
        for (var i = 0; i < 4; i++) {
            var randomNumbers = Math.floor(Math.random() * 10) + 1;
            numberOptions.push(randomNumbers);
            console.log("i need four numbers " + numberOptions);
        }
    //create my for loop to assign the crystals the four random numbers I just created
        //create new crystal images to appear in the DOM so numbers are random every time
        for (var i = 0; i < numberOptions.length; i++) {
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            //add the proper source attribute
            imageCrystal.attr("src", "http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg");
            //assign the value that is equal to the numberOptions array value
            imageCrystal.attr("data-crystalvalue", numberOptions[i]);
            console.log(numberOptions);
            //append image to the container
            $(".test").append(imageCrystal);
        }
    }
    //call my function
    newGame();
    //run function once user clicks on crystal
    $(document).on("click", ".crystal-image", function (){
    //assigns crystal value according to the user click
        var crystalValue = ($(this).attr("data-crystalValue"));
        //must be converted to integers
        crystalValue = parseInt(crystalValue);
        console.log("what is my "+crystalValue);
    //keep track of the value of each user click
        counter += crystalValue;
        $(".counter").html(counter);
        console.log("counter "+counter);
    //How to calculate wins
        if (counter === targetNumber) {
            alert("You win!");
            wins++;
            $(".test").empty();
            $(".counter").empty();
            newGame();
            $(".wins").text(wins);
        }
        //how to calculate losses
        else if (counter >= targetNumber) {
            alert("You lose!!");
            $(".test").empty();
            $(".counter").empty();
            newGame();
        }
    })
});
