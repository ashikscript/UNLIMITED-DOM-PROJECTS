var quoteArray = [];
var index = 0;
var textPosition = 0;
var flag = true;
var destination = document.getElementById("typedtext");

window.addEventListener("load", typeWriter);

function loadQuote() {
  const url = "https://api.quotable.io/random";

  fetch(url)
    .then(Response => {
      if (Response.ok) return Response.json();
      else console.log(Response.status);
    })

    .then(data => {
      quoteArray[index] = data.content;
    });
}

function typeWriter() {
  if (flag) {
    loadQuote();
    quoteArray[index] += "";
    flag = false;
  }

  destination.innerHTML =
    quoteArray[index].substring(0, textPosition) + "<span>\u25AE</span>";

  if (textPosition++ != quoteArray[index].length) {
    setTimeout("typeWriter()", 100);
  } else {
    quoteArray[index] = "";
    setTimeout("typeWriter()", 3000);
    textPosition = 0;
    flag = true;
  }
}

///only upper code folllow please

// var quoteArray = [];
// var index = 0;
// var textPosition = 0;
// var flag = true;

// loadQuote = () => {
//   const url = "https://api.quotable.io/random";

//   fetch(url)
//     .then(response => {
//       if (!response.ok) throw Error(response.statusText);
//       return response.json();
//     })

//     .then(data => {
//       quoteArray[index] = data.content;
//     })

//     .catch(error => console.log(error));
// };

// typewriter = () => {
//   if (flag) {
//     loadQuote();
//     quoteArray[index] += "";
//     flag = false;
//   }

//   document.querySelector("#quote").innerHTML =
//     quoteArray[index].substring(0, textPosition) + "<span>\u25AE</span>";

//   if (textPosition++ != quoteArray[index].length) {
//     setTimeout("typewriter()", 100);
//   } else {
//     quoteArray[index] = " ";
//     setTimeout("typewriter()", 4000);
//     textPosition = 0;
//     flag = true;
//   }
// };

// window.addEventListener("load", typewriter);
