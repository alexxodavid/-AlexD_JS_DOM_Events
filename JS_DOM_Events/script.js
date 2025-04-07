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

let randomColorBtn = document.getElementById("randomColorBtn");

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)})`;
}

randomColorBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = getRandomColor();
});

function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn");
    btn.classList.toggle("glow"); 
  }

  let modeToggleBtn = document.getElementById("modeToggleBtn");

  modeToggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  
    if (document.body.classList.contains("dark-mode")) {
      modeToggleBtn.innerText = "light MODE";
    } else {
      modeToggleBtn.innerText = "dark MODE";
    }
  });