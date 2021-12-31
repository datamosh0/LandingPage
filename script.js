const toggleBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav");

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".home__btn");
const closeButton = document.querySelector(".close-button");

// HAMBURGAR MENU
toggleBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
});

// SIGN UP MODAL
function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
