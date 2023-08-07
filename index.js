// document.querySelector(".set").addEventListener("click",function (){ // adding eventListeners to all the buttons at once by wrapping all those elements to a single class
//     alert("I got Clicked");
// });

var len = document.querySelectorAll(".drum").length; // to get the length of the query or no. of buttons
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this event listner is for mouse clicks.
    var button = this.innerHTML; // this attrubute give us the key that wass clicked and hence
    sound(button); // calling the function sound and passing the key tp check which sound to play.
    buttonAnimation(button); // for animation
  });
}

document.addEventListener("keydown", function (event) {
  // the event parameter gives us the event that trigrred the event listner
  // event has many properties key is one of the so key gives us the key that was pressed. hence we check which key was pressed.

  sound(event.key); // calling the sound function and passing the key  that was pressed.
  buttonAnimation(event.key); // for animation
});

// var audio=new Audio("sounds/tom-1.mp3");  // this is how we play sound
//         audio.play();// creating a new object audio of a constructor function "Audio" and play is one of the methods of the constructor function.

function sound(button) {
  // this function will take the key to check which sound is to be played
  switch (button) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  // setTimeout(function () {
  //   activeButton.classList.remove("pressed");
  // }, 100);

  setTimeout(function () {
    // setting the function setTimeout to remove the class ("pressed") tyo remove the animation.
    activeButton.classList.remove("pressed");
  }, 100);
}

// the addEventListner funtion is also a higher order function that takes a callback function as a input(parameter ).
