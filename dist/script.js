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

/* Swiper - reviews */
var swiper = new Swiper(".swiperReviews", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  mousewheel: false,
  keyboard: true,
});

/* Swiper - events */
var swiper = new Swiper(".swiperEvents", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next-event",
    prevEl: ".swiper-button-prev-event",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  mousewheel: false,
  keyboard: true,
});
