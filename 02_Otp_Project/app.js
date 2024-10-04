// Otp type only number set

let generatedOTP;

function tackleOTPBoxes() {
  const boxes = document.getElementById("otp-box-list-id");
  boxes.addEventListener("input", function (e) {
    const target = e.target;
    const value = target.value;

    if (isNaN(value)) {
      target.value = "";
      return;
    }
    //Curser auto next function
    const nextElement = target.nextElementSibling;

    if (nextElement) {
      nextElement.focus();
    }
    validateOTP();
  });
}

// 4 digit otp generate idea

function generateOTP() {
  generatedOTP = Math.floor(1000 + Math.random() * 9000);
  const otpElem = document.getElementById("generated-otp-id");

  otpElem.innerText = `Your OTP: ${generatedOTP}`;
}

// otp valided wrong type idea

function validateOTP() {
  let typeNumber = "";
  const bboxListElem = document.getElementById("otp-box-list-id");
  [...bboxListElem.children].forEach(elem => {
    typeNumber = typeNumber + elem.value;
  });

  console.log(generatedOTP, typeNumber);

  let generatedOTP;
  const result = generatedOTP === parseInt(typeNumber, 10);
  const resultElem = document.getElementById("result-id");

  if (result) {
    resultElem.innerText = "Otp has been validate successfully";
  } else {
    resultElem.innerText = "OTP is Invalid";
  }
}

//function call way list

function init() {
  console.log("JavaScipt initilaization done !!");
  tackleOTPBoxes();
  setTimeout(generateOTP, 2000);
}

init();
