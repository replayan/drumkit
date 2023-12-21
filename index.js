alert("Please use desktop/laptop for better experience");

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  const keysArray = [
    "w",
    "W",
    "a",
    "A",
    "s",
    "S",
    "d",
    "D",
    "j",
    "J",
    "l",
    "L",
    "k",
    "K",
  ];
  if (keysArray.includes(event.key)) {
    makeSound(event.key.toLowerCase());
    buttonAnimation(event.key);
  }
});

function makeSound(key) {
  let selectSound = {
    w: () => new Audio("sounds/tom-1.mp3").play(),
    a: () => new Audio("sounds/tom-2.mp3").play(),
    s: () => new Audio("sounds/tom-3.mp3").play(),
    d: () => new Audio("sounds/tom-4.mp3").play(),
    j: () => new Audio("sounds/snare.mp3").play(),
    k: () => new Audio("sounds/crash.mp3").play(),
    l: () => new Audio("sounds/kick-bass.mp3").play()
  };
  selectSound[key]();
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
