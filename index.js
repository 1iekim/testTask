const BtnOpener = document.querySelector(".content__btn");
const BtnCloser = document.querySelector(".modal__close");

const Modal = document.querySelector(".section-modal");
const ModalBox = document.querySelector(".modal");

const formBtn = document.querySelectorAll(".form__btn");

function ModalToggle(event) {
  event.stopPropagation();
  console.log('click');
  if(Modal.classList.toggle("section-modal--active"));
}

BtnOpener.addEventListener("click", ModalToggle);
BtnCloser.addEventListener("click", ModalToggle);
Modal.addEventListener("click", ModalToggle);

ModalBox.addEventListener("click", (event) => event.stopPropagation());
formBtn.forEach(btn => btn.addEventListener("click", (event) => {event.preventDefault()}));