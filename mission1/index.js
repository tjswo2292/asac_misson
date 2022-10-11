const modalBtn = document.querySelector(".bar-icon-btn");
const show = document.querySelector(".dimmed");

const $prevBtn = document.querySelector(".prev-img-btn");
const $nextBtn = document.querySelector(".next-img-btn");
const $imgBox = document.querySelector(".main-img-box");

// Image slide
function moveImg() {
  $imgBox.style.transform = "translateX(-1200px)";
  $imgBox.style.transition = "all .5s ease-in-out";
}
// Modal
function showmodal() {
  show.style.display = "block";
}
function hideModal() {
  show.style.display = "none";
}

modalBtn.addEventListener("mouseover", showmodal);
modalBtn.addEventListener("mouseout", hideModal);

$prevBtn.addEventListener("click", moveImg);

// 넘어가는 사진은 안보이게 해주면 됨
