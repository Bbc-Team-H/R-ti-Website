function MenuOpen() {
  var menu = document.getElementById("nav");
  menu.classList.toggle("hidden");
}

document.getElementById("burgerbutton").addEventListener("click", MenuOpen)