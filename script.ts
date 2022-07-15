const toggleBtn: HTMLElement = document.querySelector(".menu")!;
const nav: HTMLElement = document.querySelector(".nav")!;

const modal: HTMLElement = document.querySelector(".modal")!;
const trigger: HTMLElement = document.querySelector(".home__btn")!;
const closeButton: HTMLElement = document.querySelector(".close-button")!;

// HAMBURGER MENU
toggleBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
});

// SIGN UP MODAL
function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event: MouseEvent) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
