const $slideList = document.querySelector(".main-img-container");
const $slideContent = document.querySelectorAll(".slide-content");
const $prevBtn = document.querySelector(".prev-btn");
const $nextBtn = document.querySelector(".next-btn");

let slideLen = $slideContent.length;
let slideWidth = 1060;
let slideSpeed = 300;
let slideMargin = 60;
let curIndex = 0;

let firstChild = $slideList.firstElementChild;
let lastChild = $slideList.lastElementChild;
let cloneFirst = firstChild.cloneNode(true);
let cloneLast = lastChild.cloneNode(true);

// translateX 좌표값
$nextBtn.addEventListener("click", () => {
  if (curIndex <= slideLen - 1) {
    $slideList.style.transform = `translateX(-${
      (slideWidth + slideMargin) * (curIndex + 1)
    }px)`;
    $slideList.style.transition = `${slideSpeed}ms`;
    curIndex++;

    if (curIndex == slideLen - 2) {
      curIndex = 0;
      $slideList.style.tansition = "0ms";
      $slideList.style.transform = `translateX(${slideWidth * curIndex})`;
    }
  }
});

$prevBtn.addEventListener("click", () => {
  if (curIndex <= slideLen - 1) {
    $slideList.style.transform = `translateX(${
      (slideWidth + slideMargin) * (curIndex + 1)
    }px)`;
    $slideList.style.transition = `${slideSpeed}ms`;
    curIndex++;
    if (curIndex == slideLen - 2) {
      curIndex = 0;
      $slideList.style.tansition = "0ms";
      $slideList.style.transform = `translateX(-${slideWidth * curIndex})`;
    }
  }
});
