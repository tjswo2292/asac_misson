const modalBtn = document.querySelector(".bar-icon-btn");
const show = document.querySelector(".dimmed");

const $prevBtn = document.querySelector(".prev-img-btn");
const $nextBtn = document.querySelector(".next-img-btn");
const $imgBox = document.querySelector(".main-img-box");

// Modal
function showmodal() {
  show.style.display = "block";
}
function hideModal() {
  show.style.display = "none";
}

modalBtn.addEventListener("mouseover", showmodal);
modalBtn.addEventListener("mouseout", hideModal);
