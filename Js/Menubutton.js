function MenuOpen() {
    var menu = document.getElementById("nav");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
   
  document.getElementById("burgerbutton").addEventListener("click", MenuOpen)