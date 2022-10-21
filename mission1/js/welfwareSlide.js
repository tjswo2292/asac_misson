const $choice = document.querySelector(".welfware-choice-list");
const $choiceList = document.querySelectorAll(".welfware-choice-list li");
const $left = document.querySelector(".welfware-btn-left");
const $right = document.querySelector(".welfware-btn-right");

let choiceListLen = $choiceList.length;
let slideWidth = 500;
let slideMargin = 100;
let slideSpeed = 300;
let curIndex = 0;

$right.addEventListener("click", () => {
  if (curIndex <= choiceListLen - 6) {
    $choice.style.transform = `translateX(-${
      (slideWidth + slideMargin) * (curIndex + 1)
    }px)`;
    $choice.style.transition = `${slideSpeed}ms`;
    $left.style.display = "block";
  }
});

$left.addEventListener("click", () => {
  if (curIndex <= choiceListLen - 6) {
    $choice.style.transform = `translateX(${slideWidth * curIndex}px)`;
    $choice.style.transition = `${slideSpeed}ms`;
    $left.style.display = "none";
  }
});
