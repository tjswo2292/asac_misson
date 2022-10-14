const $imgContainer = document.querySelector(".main-img-container");
const $slideContent = document.querySelectorAll(".slide-content");
const $prevBtn = document.querySelector(".prev-btn");
const $nextBtn = document.querySelector(".next-btn");

let slideLen = $slideContent.length;
let slideWidth = 1097;
let slideSpeed = 300;

let firstChild = $imgContainer.firstElementChild;
let lastChild = $imgContainer.lastElementChild;
let cloneFirst = firstChild.cloneNode(true);
let cloneLast = lastChild.cloneNode(true);

// $imgContainer.appendChild(cloneFirst);
// $imgContainer.insertBefore(cloneLast, firstChild);

let curIndex = 0; // img index 나타내기

$nextBtn.addEventListener("click", () => {
  if (curIndex <= slideLen - 1) {
    // 마지막 이미지까지 조건 실행
    $imgContainer.style.transition = `${slideSpeed}ms`;
    $imgContainer.style.transform = `translateX(-${
      slideWidth + (curIndex + 2)
    }px)`;
  } else if (curIndex == slideLen - 1) {
    // 마지막 이미지면
    setTimeout(() => {
      $slideList.style.transition = "0ms";
      $slideList.style.transform = `translate3d(-${slideWidth}px, 0px, 0px)`;
    }, slideSpeed);
    curIndex = -1;
  }
});
