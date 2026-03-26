/* Mobile menu */

function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const htmlTag = document.documentElement;

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.toggle("hidden");
    setTimeout(function () {
      mobileMenu.classList.toggle("translate-x-full");
      htmlTag.classList.toggle("overflow-y-hidden");
    }, 1);
  } else {
    mobileMenu.classList.toggle("translate-x-full");
    htmlTag.classList.toggle("overflow-y-hidden");
    setTimeout(function () {
      mobileMenu.classList.toggle("hidden");
    }, 500);
  }
}
