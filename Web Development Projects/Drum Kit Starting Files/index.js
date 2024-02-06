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

for (var i=0; i<nomberOfDrumButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {
        alert("i got clicked");
    });

}