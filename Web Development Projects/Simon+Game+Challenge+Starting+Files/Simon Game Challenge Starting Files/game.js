var gamePattern = [];
var userClickedPattern = [];
buttonColours = ["red", "blue", "green", "yellow"];
level = 0
var started = false;

$(document).keydown(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
});




$(".btn").click(function () {

    var clickedButtonId = $(this).attr("id");

    userClickedPattern.push(clickedButtonId)

    playSound(clickedButtonId);
    
    animatePress(clickedButtonId);

    checkAnswer(userClickedPattern.Length-1);

});




function checkAnswer(currentLevel) {
    
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.Length === gamePattern.Length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        } else {
            playSound("wrong");
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");

            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 200);

            startOver();
        }
       
    }
}




function nextSequence() {

    userClickedPattern  = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

function animatePress(color) {

    var selectedButton = $("#" + color);

    selectedButton.addClass("pressed");

    setTimeout(function() {
        selectedButton.removeClass("pressed")
    }, 50);
}


function playSound(selectedButton) {
    var audio = new Audio("sounds/" + selectedButton + ".mp3");
    audio.play();    
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;

}




    

