let btn = document.getElementById("dark-theme-btn");
let body = document.body;

const textToAdd = "<span class='copied'>Copied!</span>"

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

const copyToClipboard = (text) => {
  const original = text.innerHTML;

  const cb = navigator.clipboard;
  cb.writeText(text.innerHTML);
  
  text.innerHTML += textToAdd;

  setTimeout(function () {
    text.innerHTML = original
  }, 1000);
  
};
