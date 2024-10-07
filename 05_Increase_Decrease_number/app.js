//Javascript id add

const counterElement = document.getElementById("counter");
const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");

let counter = 0;

const updateCounter = value => {
  counter = counter + value;
  counterElement.innerText = counter;

  if (counter >= 10) {
    plusButton.setAttribute("disabled", true);
  } else {
    plusButton.removeAttribute("disabled", false);
  }

  //minus button code
  // counter = counter - 1;
  // counterElement.innerText = counter;

  if (counter <= 0) {
    minusButton.setAttribute("disabled", true);
  } else {
    minusButton.removeAttribute("disabled", false);
  }
};

//button tap increase
plusButton.addEventListener("click", () => {
  updateCounter(1);
});

//second button
minusButton.addEventListener("click", () => {
  updateCounter(-1);
});
