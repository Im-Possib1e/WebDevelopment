
// Selecting elements with jquery
// document.querySelector("h1")   
// $("h1")

// Manipulating Styles with jquery.
// $("h1").css("color", "green");

// $("h1").addClass("big-title");

// Manipulating text with jQuery.
// $("h1").text("bye");

// to manipulate html element 
// $("button").html("<em>Hey</em>");

// get value of attribute
// $("img").attr("src");

// set value of attribute
// $("a").attr("href","https://www.yahoo.com");

// manipulating attributes with jquery
// $("h1").click(function() {
//     $("h1").css("color","purple");
// });

//adding event listners with jquery
// for (var i= 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }


// $("button").click(function() {
//     $("h1").css("color", "purple");
// });

// $("input").keydown(function(event) {
//     console.log(event.key);
// });

//when yo utyoe anythingt in keyboard its shown in h1
// $(document).keydown(function(event) {
//     $("h1").text(event.key);
// });

//more easier way to add event listner 
// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple")
// });


//it hides teh eelement
// $("button").on("click", function() {
//     $("h1").hide();
// });

//it toggle teh eelement
// $("button").on("click", function() {
//     $("h1").toggle();
// });

//it fades out teh eelement
// $("button").on("click", function() {
//     $("h1").fadeOut();
// });

//it fades toggle the eelement
// $("button").on("click", function() {
//     $("h1").fadeToggle();
// });

//it slides up teh eelement
// $("button").on("click", function() {
//     $("h1").slideUp();
// });

//it slides down teh eelement
// $("button").on("click", function() {
//     $("h1").slideDown();
// });

//it slides Toggle teh eelement
// $("button").on("click", function() {
//     $("h1").slideToggle();
// });

//to define custom css that we want to animate towards
// $("button").on("click", function() {
//     $("h1").animate();
// });

// ex:
// $("button").on("click", function() {
//     $("h1").animate({opacity:0.5});
// });

