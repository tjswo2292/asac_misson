const modalBtn = document.querySelector(".bar-icon-btn");
const show = document.querySelector(".dimmed");

// Modal
function showmodal() {
  show.style.display = "block";
}
function hideModal() {
  show.style.display = "none";
}

modalBtn.addEventListener("mouseover", showmodal);
modalBtn.addEventListener("mouseout", hideModal);
