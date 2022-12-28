const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");

let index = 1;
let time = 500 / speedElement.value;
const someText = "I am javascript";

speedElement.addEventListener("input", (e) => {
  time = 500 / e.target.value;
});

function automaticText() {
  console.log(someText.slice(0, 4));
  textElement.innerText = someText.slice(0, index);
  index++;

  if (index > someText.length) {
    index = 1;
  }
  setTimeout(automaticText, time);
}
automaticText();
