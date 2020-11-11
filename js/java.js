  const link = document.querySelector(".button-contacts");
  const popup = document.querySelector(".modal-contact");
  const close = document.querySelector(".modal-button-close");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });



