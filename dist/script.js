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

/* Search bar */

function toggleSearch() {
  const searchBar = document.getElementById("search-bar");
  const openSearch = document.getElementById("open-search");
  const submitSearch = document.getElementById("submit-search");

  if (searchBar.classList.contains("w-72")) {
    searchBar.classList.toggle("w-72");
    searchBar.classList.toggle("w-10");
    searchBar.classList.toggle("px-5");
    openSearch.classList.toggle("hidden");
    submitSearch.classList.toggle("hidden");
  } else {
    searchBar.classList.toggle("w-10");
    searchBar.classList.toggle("w-72");
    searchBar.classList.toggle("px-5");
    openSearch.classList.toggle("hidden");
    submitSearch.classList.toggle("hidden");
  }
}

/* Accordions */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var plus = this.querySelector(".bi-plus");
    var minus = this.querySelector(".bi-dash");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      plus.style.display = "block";
      minus.style.display = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      plus.style.display = "none";
      minus.style.display = "block";
    }
  });
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

/* Swiper - membership */
var swiper = new Swiper(".swiperMembership", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next-membership",
    prevEl: ".swiper-button-prev-membership",
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

/* Swiper - gallery */
var swiper = new Swiper(".swiperGallery", {
  slidesPerView: 1.4,
  centeredSlides: true,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-gallery",
    prevEl: ".swiper-button-prev-gallery",
  },
  mousewheel: false,
  keyboard: true,
});
