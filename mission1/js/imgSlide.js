// 이미지 콘텐츠가 움직이게
// 버튼 클릭마다 이미지 인덱스를 다르게 변경해줘야 함

const $slideContent = document.querySelectorAll(".slide-content");
const $nextBtn = document.querySelector(".next-btn");
const $prevBtn = document.querySelector("prev-btn");

let slideLen = $slideContent.length;
let slideWidth = 1060;
let curIndex = 0;

$nextBtn.addEventListener("click", () => {
  if (curIndex <= slideLen - 1) {
    $slideContent[curIndex].style.transition = "300ms ease-in-out";
    $slideContent[curIndex].style.transform = `translateX(-${
      slideWidth * (curIndex + 2)
    })`;
  }
});

// 모르는 거
// 1. main-img-container가 움직이는건지 그 안에있는 li가 움직이는 건지
// 2. 만약 li가 움직이는거면 위 방법은 왜 안되는지
// 3. 만약 main-img-container가 움직이는 거면 어떤 방식으로 움직이는 건지
