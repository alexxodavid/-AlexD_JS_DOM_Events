// Get the element that will show our key code
let directionEl = document.getElementById("direction");

// Listen for keydown event
document.addEventListener("keydown", function(e) {
  directionEl.innerText = `The Key you pressed is ${e.code}`;
});

// Get the button element
let buttonEl = document.getElementById("clickMe");

buttonEl.addEventListener("click", function() {
  buttonEl.innerText = "You clicked me!";
});
