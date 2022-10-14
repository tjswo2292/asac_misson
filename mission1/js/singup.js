// 함수는 되도록 한 가지 일만
const $signUp = document.querySelector("#signUpBtnBox");
const $modalBack = document.querySelector("#modalBackground");
const $loginModalContainer = document.querySelector(".login-modal-container");
const $modalCloseBtn = document.querySelector("#modalCloseBtn");
const $continueEmail = document.querySelector("#continueEmail");
const $pwModalWrap = document.querySelector(".pw-modal-wrap");
const $pwModalCloseBtn = document.querySelector("#pwModalCloseBtn");

function showLogin(e) {
  $modalBack.style.display = "block";
}

function closeModal() {
  $modalBack.style.display = "none";
}
function closePwModal() {
  $modalBack.style.display = "none";
  $loginModalContainer.style.display = "block";
}
function inputPw(e) {
  e.preventDefault();
  $loginModalContainer.style.display = "none";
  $pwModalWrap.style.display = "block";
}

$signUp.addEventListener("click", showLogin);
$modalCloseBtn.addEventListener("click", closeModal);
$pwModalCloseBtn.addEventListener("click", closePwModal);
$continueEmail.addEventListener("click", inputPw);

// #FEE500
