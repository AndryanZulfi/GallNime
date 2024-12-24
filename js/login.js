const email = document.querySelector("input[type=email]");
const labelEmail = document.querySelector("label[for=email]");
const pwd = document.querySelector("input[type=password]");
const labelPwd = document.querySelector("label[for=password]");
const h1 = document.querySelector("h1");
const keyLocked = document.querySelector(".keyLocked");
const keyOpen = document.querySelector(".keyOpen");
const lock = document.querySelector(".lock");

email.addEventListener("focus", function () {
  labelEmail.setAttribute("class", "email");
});

pwd.addEventListener("focus", function () {
  labelPwd.setAttribute("class", "password");
});

keyLocked.addEventListener("click", function () {
  keyLocked.style.opacity = "1";
  keyOpen.style.opacity = "0";
});
