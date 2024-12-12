const body = document.querySelector("body");
const BtnOpener = document.querySelector(".content__btn");

let isModalOpen = false;

// create modal 
// create modal container
const modalSection = document.createElement("section");
const modalBox = document.createElement("div");

modalSection.className = "section-modal";
modalBox.className = "modal";

// create modal content
const exitBtn = document.createElement("button");
const form = document.createElement("form");

exitBtn.className = "modal__close";
form.className = "modal__form form";

// create form content

  // create title
  const formTitle = document.createElement("h2");

  formTitle.className = "form__title";
  formTitle.textContent = "Войти в систему";
  
  // create email label
  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");

  emailLabel.className = "form__label label-text";
  emailLabel.setAttribute("for", "login_id");

  emailInput.className = "form__input";
  emailInput.setAttribute("id", "login_id");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("placeholder", "Email/Телефон");
  emailInput.setAttribute("autocomplete", "username");

  // add input to label
  emailLabel.insertAdjacentElement("afterbegin", emailInput);

  // create password ladel
  const passwordLabel = document.createElement("label");
  const passwordInput = document.createElement("input");

  passwordLabel.className = "form__label label-text";
  passwordLabel.setAttribute("for", "password_id");

  passwordInput.className = "form__input";
  passwordInput.setAttribute("id", "password_id");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("placeholder", "Пароль");
  passwordInput.setAttribute("autocomplete", "current-password");

  // add input to label
  passwordLabel.insertAdjacentElement("afterbegin", passwordInput);

  // create checkbox label
  const checkboxLabel = document.createElement("label");
  const checkboxInput = document.createElement("input");
  const checkboxCustomIcon = document.createElement("span");

  checkboxLabel.className = "form__label-checkbox";
  checkboxLabel.setAttribute("for", "checkbox_id");

  checkboxInput.className = "input-checkbox";
  checkboxInput.setAttribute("id", "checkbox_id");
  checkboxInput.setAttribute("type", "checkbox");

  checkboxCustomIcon.className = "form__input-checkbox";

  checkboxLabel.textContent = "Запомнить пароль";
  checkboxLabel.insertAdjacentElement("afterbegin", checkboxCustomIcon);
  checkboxLabel.insertAdjacentElement("afterbegin", checkboxInput);

  // create link
  const formLink = document.createElement("span");

  formLink.className = "form__link";
  formLink.textContent = "Восстановить";

  // create form buttons
  const signInBtn = document.createElement("button");
  const registerBtn = document.createElement("button");

  signInBtn.className = "form__btn form__btn-signIn";
  signInBtn.textContent = "Войти";

  registerBtn.className = "form__btn form__btn-register";
  registerBtn.textContent = "Зарегестрироваться";

  // add form content
  form.insertAdjacentElement("beforeend", formTitle);
  form.insertAdjacentElement("beforeend", emailLabel);
  form.insertAdjacentElement("beforeend", passwordLabel);
  form.insertAdjacentElement("beforeend", checkboxLabel);
  form.insertAdjacentElement("beforeend", formLink);
  form.insertAdjacentElement("beforeend", signInBtn);
  form.insertAdjacentElement("beforeend", registerBtn);

  // add content to modalBox
  modalBox.insertAdjacentElement("beforeend", exitBtn);
  modalBox.insertAdjacentElement("beforeend", form);

  // add modalBox to modalSection
  modalSection.insertAdjacentElement("beforeend", modalBox);

function ModalToggle(event) {
  event.stopPropagation();
  emailInput.value = "";
  passwordInput.value = "";
  if (isModalOpen) {
    modalSection.remove();
    isModalOpen = false;
  } else {
    body.append(modalSection);
    isModalOpen = true;
  };
}

function CheckboxChange(event) {
  event.stopPropagation();
  if (checkboxInput.checked) {
    checkboxCustomIcon.classList.add("form__input-checkbox--active");
  } else {
    checkboxCustomIcon.classList.remove("form__input-checkbox--active");
  }
}

BtnOpener.addEventListener("click", ModalToggle);

exitBtn.addEventListener("click", ModalToggle);
modalSection.addEventListener("click", ModalToggle);

checkboxInput.addEventListener("change", CheckboxChange);

modalBox.addEventListener("click", (event) => event.stopPropagation());
[signInBtn, registerBtn].forEach((btn) =>
  btn.addEventListener("click", (event) => {
    event.preventDefault();
  })
);
