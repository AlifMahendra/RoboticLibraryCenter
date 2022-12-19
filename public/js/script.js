var slider = document.getElementById("navbar-slider");
var bar1 = document.getElementById("bar-frst");
var bar2 = document.getElementById("bar-scnd");
var bar3 = document.getElementById("bar-thrd");

function openNavBar() {
  slider.classList.toggle('-right-full');
  slider.classList.toggle('right-0');
  bar1.classList.toggle("rotate-45");
  bar3.classList.toggle('-rotate-45');
  bar2.classList.toggle('translate-x-24');
}
