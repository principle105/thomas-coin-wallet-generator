let btn = document.getElementById("dark-theme-btn");
let genBtn = document.getElementById("generate-btn");
let body = document.body;

window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    body.className += " dark-theme";
    btn.innerHTML = "💡";
  }
};

btn.onclick = () => {
  body.className = body.className ? "" : "dark-theme";
  btn.innerHTML = body.className ? "💡" : "🌙";
  localStorage.setItem("theme", body.className ? "dark" : "");
};