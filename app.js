let emailInput = document.querySelector("#email");
let button = document.querySelector(".submit-button");

let errorIcon = document.querySelector(".error-icon");
let error = document.querySelector(".error-message");

emailInput.addEventListener("keydown", (e) => {
  let email = emailInput.value;

  if (e.keyCode === 13) {
    //email is not valid, throw error
    if (!validateEmail(email)) {
      error.style.display = "block";
      errorIcon.classList.add("active");
      button.classList.add("active");
    } else {
      error.style.display = "none";
      errorIcon.classList.remove("active");
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 1500);
    }
  } else {
    error.style.display = "none";
    errorIcon.classList.remove("active");
    button.classList.remove("active");
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  let email = emailInput.value;

  if (!validateEmail(email)) {
    error.style.display = "block";
    errorIcon.classList.add("active");
    button.classList.add("active");
  } else {
    error.style.display = "none";
    errorIcon.classList.remove("active");
    button.classList.add("active");
    setTimeout(() => button.classList.remove("active"), 1500);
  }
});

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
