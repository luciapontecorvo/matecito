var prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Hacer scroll hacia arriba
    document.querySelector("header").classList.remove("hidden");
  } else {
    // Hacer scroll hacia abajo
    document.querySelector("header").classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
});
