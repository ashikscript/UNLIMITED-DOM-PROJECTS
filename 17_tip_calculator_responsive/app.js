const amount = document.getElementById("amount");
const guests = document.getElementById("guests");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");

calculate = () => {
  const tip = ((amount.value * quality.value) / guests.value).toFixed(2);
  amount.value = "";
  guests.value = "";
  quality.value = "";
  if (tip === "NaN") {
    tipAmount.innerHTML = "Tip $0 each";
    showTipAmount();
  } else {
    tipAmount.innerHTML = "Tip $" + tip + "each";
    showTipAmount();
  }
};
showTipAmount = () => {
  var x = tipAmount;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};

//chatgpt give under code

// const amount = document.getElementById("amount");
// const guests = document.getElementById("guests");
// const quality = document.getElementById("quality");
// const tipAmount = document.getElementById("tip-amount");

// calculate = () => {
//   const billAmount = parseFloat(amount.value);
//   const numberOfGuests = parseInt(guests.value);
//   const serviceQuality = parseFloat(quality.value);

//   // Check for invalid inputs
//   if (
//     isNaN(billAmount) ||
//     isNaN(numberOfGuests) ||
//     isNaN(serviceQuality) ||
//     numberOfGuests <= 0 ||
//     billAmount <= 0
//   ) {
//     tipAmount.innerHTML = "Please enter valid values for all fields.";
//     showTipAmount();
//     return;
//   }

//   // Calculate tip
//   const tip = ((billAmount * serviceQuality) / numberOfGuests).toFixed(2);

//   // Display tip amount
//   tipAmount.innerHTML = `Tip $${tip} each`;
//   showTipAmount();

//   // Optionally, reset inputs
//   // amount.value = "";
//   // guests.value = "";
//   // quality.value = "";
// };

// showTipAmount = () => {
//   var x = tipAmount;
//   x.className = "show";
//   setTimeout(function () {
//     x.className = x.className.replace("show", "");
//   }, 3000);
// };
