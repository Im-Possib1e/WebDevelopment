// document.querySelectorAll("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("i got clicked");
// }


// One solution 
// document.addEventListener('DOMContentLoaded', function() {

//     var buttons = document.querySelectorAll('.drum');
//     console.log(buttons)

//     buttons.forEach(function(button) {

//         button.addEventListener('click', function() {

//             alert("i got clicked");

//         });
//     });
// });

//Second solution comparitively easier one
var nomberOfDrumButtons = document.querySelectorAll(".drum").length;

function makeSound(key) {

        switch (key) {
            case "w":
                var audio = new Audio('./sounds/tom-1.mp3');
                break;
            case "a":
                var audio = new Audio('./sounds/tom-2.mp3');
                break;
            case "s":
                var audio = new Audio('./sounds/tom-3.mp3');
                break;
            case "d":
                var audio = new Audio('./sounds/tom-4.mp3');
                break;
            case "j":
                var audio = new Audio('./sounds/snare.mp3');
                break;
            case "k":
                var audio = new Audio('./sounds/crash.mp3');
                break;
            case "l":
                var audio = new Audio('./sounds/kick-bass.mp3');
                break;
            default:
                break;
        }
        audio.play();    
    }

for (var i=0; i<nomberOfDrumButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
       
    });

}

document.addEventListener("keydown", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);
      
});


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);

}