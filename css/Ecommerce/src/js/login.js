const loginForm = getElement("loginForm");
const signupForm = getElement("signupForm");
const showLoginButton = getElement("showLoginBtn");
const showSignupButton = getElement("showSignupBtn");
const loginUserName = getElement("LoginUserName");
const loginPassword = getElement("loginPassword");
const loginButton = getElement("loginBtn");
const successErrMsg = getElement("succErrMsg");
const signUpUserName = getElement("signupUserName");
const signUpPassword = getElement("signupPassword");
const signupEmail = getElement("signupEmail");
const signupButton = getElement("signupBtn");
const authErrMsg = getElement("authErrMsg");

showSignupButton.addEventListener("click", showSignup);
showLoginButton.addEventListener("click", showLogin);
loginButton.addEventListener("click", loginFn);
signupButton.addEventListener("click", signupFn);

function showSignup() {
  signupForm.classList.remove("d-none");
  loginForm.classList.add("d-none");
}

function showLogin() {
  signupForm.classList.add("d-none");
  loginForm.classList.remove("d-none");
}
function loginFn() {}
function signupFn() {}

function getElement(id) {
  return document.getElementById(id);
}
