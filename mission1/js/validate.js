// 이메일 형식히면 pw 입력창으로 넘어가기
// 아니면 alert창 띄우기
const $submitEmail = document.querySelector("#continueEmail");
const $emailForm = document.querySelector(".email-form");
const $input = document.querySelector(".email-form input");

let regExp = new RegExp(
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
);

$submitEmail.addEventListener("click", (e) => {
  let inputValue = $input.value;

  if (regExp.test(inputValue) === true) {
    alert("success");
  } else {
    alert("fail");
  }
});
