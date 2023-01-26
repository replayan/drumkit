let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "W":
      let tom12 = new Audio("sounds/tom-1.mp3");
      tom12.play();
      break;
    case "A":
      let tom22 = new Audio("sounds/tom-2.mp3");
      tom22.play();
      break;
    case "S":
      let tom32 = new Audio("sounds/tom-3.mp3");
      tom32.play();
      break;
    case "D":
      let tom42 = new Audio("sounds/tom-4.mp3");
      tom42.play();
      break;
    case "J":
      let snare2 = new Audio("sounds/snare.mp3");
      snare2.play();
      break;
    case "K":
      let crash2 = new Audio("sounds/crash.mp3");
      crash2.play();
      break;
    case "L":
      let kick2 = new Audio("sounds/kick-bass.mp3");
      kick2.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
