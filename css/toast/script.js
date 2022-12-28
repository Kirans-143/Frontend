const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const texts = ["text 1", "text 2", "text 3", "text 4", "text 5"];

const types = ["info", "error", "success"];

button.addEventListener("click", () => createToast());

function createToast(text = null, type = null) {
  const notification = document.createElement("div");

  notification.classList.add("toast");
  notification.classList.add(type ? type : getRandomTtype());
  notification.innerText = text ? text : getRandomTText();
  toasts.append(notification);
  setTimeout(() => {
    notification.remove();
  }, 4000);
}
function getRandomTtype() {
  return types[Math.floor(Math.random() * types.length)];
}

function getRandomTText() {
  return texts[Math.floor(Math.random() * texts.length)];
}