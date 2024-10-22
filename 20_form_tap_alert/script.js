document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    alert("Thank you for your message, we will get back to you shortly!");
  });
