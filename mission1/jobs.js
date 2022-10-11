const $jobCategory = document.querySelector(".job-category");

function show() {
  let location = document.documentElement.scrollTop;

  if (location > 230) {
    $jobCategory.style.position = "fixed";
    $jobCategory.style.top = "58px";
    $jobCategory.style.borderBottom = "1px solid blue";
    $jobCategory.style.width = "100%";
    $jobCategory.style.zIndex = "1000";
  } else {
    $jobCategory.style.position = "unset";
    $jobCategory.style.top = "none";
    $jobCategory.style.left = "none";
    $jobCategory.style.borderBottom = "none";
    $jobCategory.style.zIndex = "none";
  }
}

window.addEventListener("scroll", show);
