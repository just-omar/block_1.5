const swiperBrand = new Swiper(".slider", {
  direction: "horizontal",
  loop: "true",
  slidesPerView: "auto",
  spaceBetween: 16,

  breakpoints: {
    768: {
      enabled: false,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const toggleButton = document.querySelector(".brand-block__show-more-button");
toggleButton.classList.add("hidden");

const element = document.querySelector(".slider__wrapper");
const swiperSlides = document.querySelectorAll(".swiper-slide-brand");

function changeCSS() {
  // const mediaDesktop = window.matchMedia("(min-width: 1120px)");
  const mediaTablet = window.matchMedia(
    "(min-width: 768px) and (max-width:1120px)"
  );

  if (mediaTablet.matches) {
    if (toggleButton.classList.contains("hidden")) {
      for (let i = 0; i < swiperSlides.length; i++) {
        swiperSlides[i].style.display = "flex";
        // swiperSlides[i].classList.add("flexible");
        // swiperSlides[i].classList.remove(
        //   "swiper-slide-brand:nth-last-child(-n + 3)"
        // );

        toggleButton.textContent = "Скрыть";
        toggleButton.style.setProperty("--transform-rotate", "rotate(180deg)");
      }
      toggleButton.classList.remove("hidden");
    } else {
      for (let i = 0; i < swiperSlides.length; i++) {
        // swiperSlides.classList.add(
        //   "swiper-slide-brand:nth-last-child(-n + 3)"
        // );
        swiperSlides[i].style = "";
        toggleButton.textContent = "Показать все";
        toggleButton.style.setProperty("--transform-rotate", "rotate(0deg)");
      }
      toggleButton.classList.add("hidden");
    }
  }

  // if (mediaDesktop.matches) {}
  else {
    if (toggleButton.classList.contains("hidden")) {
      for (let i = 0; i < swiperSlides.length; i++) {
        swiperSlides[i].style.display = "flex";
      }
      toggleButton.style.setProperty("--transform-rotate", "rotate(180deg)");
      toggleButton.textContent = "Скрыть";
      toggleButton.classList.remove("hidden");
    } else {
      for (let i = 0; i < swiperSlides.length; i++) {
        // swiperSlides[i].classList.add("unset");
        swiperSlides[i].style = "";
      }
      toggleButton.style.setProperty("--transform-rotate", "rotate(0deg)");
      toggleButton.textContent = "Показать все";
      toggleButton.classList.add("hidden");
    }
  }
}

toggleButton.addEventListener("click", changeCSS);
