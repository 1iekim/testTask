const BtnOpener = document.querySelector(".content__btn");
const BtnCloser = document.querySelector(".modal__close");

const Modal = document.querySelector(".section-modal");
const ModalBox = document.querySelector(".modal");

const formBtn = document.querySelectorAll(".form__btn");
const formCheckbox = document.querySelector(".input-checkbox");
const boxCheckbox = document.querySelector(".form__input-checkbox");

function ModalToggle(event) {
  event.stopPropagation();
  if (Modal.classList.toggle("section-modal--active"));
}

function CheckboxChange(event) {
  event.stopPropagation();
  if (formCheckbox.checked) {
    boxCheckbox.classList.add("form__input-checkbox--active");
  } else {
    boxCheckbox.classList.remove("form__input-checkbox--active");
  }
}

BtnOpener.addEventListener("click", ModalToggle);
BtnCloser.addEventListener("click", ModalToggle);
Modal.addEventListener("click", ModalToggle);

formCheckbox.addEventListener("change", CheckboxChange);

ModalBox.addEventListener("click", (event) => event.stopPropagation());
formBtn.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    event.preventDefault();
  })
);
