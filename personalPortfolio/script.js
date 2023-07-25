function myFunction() {
    var x = document.getElementById("navbar"); 
    // na ID navbar
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }