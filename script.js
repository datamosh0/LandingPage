var toggleBtn = document.querySelector(".menu");
var nav = document.querySelector(".nav");
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".home__btn");
var closeButton = document.querySelector(".close-button");
// HAMBURGER MENU
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
