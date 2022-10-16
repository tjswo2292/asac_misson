const $signUp = document.querySelector("#signUpBtnBox");
const $modalBack = document.querySelector("#modalBackground");
const $loginModalContainer = document.querySelector(".login-modal-container");
const $modalCloseBtn = document.querySelector("#modalCloseBtn");
const $continueEmail = document.querySelector("#continueEmail");
const $pwModalWrap = document.querySelector(".pw-modal-wrap");
const $pwModalCloseBtn = document.querySelector("#pwModalCloseBtn");

const $pwChangeBtn = document.querySelector("#resetBtn");
const $pwChange = document.querySelector(".pw-change-modal-wrap");

const $wrap = document.querySelector("body");

function showLogin(e) {
  $wrap.style.overflow = "hidden";
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
$pwChangeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  $pwModalWrap.style.display = "none";
  $pwChange.style.display = "block";
});
