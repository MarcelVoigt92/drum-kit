let drumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

const makeSound = (key) => {
  switch (key) {
    case "w":
      let tomOne = new Audio("sounds/taking the hobbits to isengard.mp3");
      tomOne.play();
      break;
    case "a":
      let tomTwo = new Audio("sounds/FPMV PFUDOR.mp3");
      tomTwo.play();
      break;
    case "s":
      let tomThree = new Audio("sounds/EMOTIONAL DAMAGE.mp3");
      tomThree.play();
      break;
    case "d":
      let tomFour = new Audio("sounds/Why you heff to be mad (Original).mp3");
      tomFour.play();
      break;
    case "j":
      let snare = new Audio(
        "sounds/Sweet Brown - Aint Nobody Got Time for That (Autotune Remix).mp3"
      );
      snare.play();
      break;
    case "k":
      let bassDrum = new Audio("sounds/Ha Got Em.mp3");
      bassDrum.play();
      break;
    case "l":
      let crash = new Audio(
        "sounds/Rick Astley - Never Gonna Give You Up (Official Music Video).mp3"
      );
      crash.play();
      break;

    default:
      console.log(key);
  }
};

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

const buttonAnimation = (currentKey) => {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
};
