var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var modalLayer = document.querySelector(".modal__layer");
var showAddToCartButton = document.querySelector(".product-of-week__order-button");
var addToCartForm = document.querySelector(".add-to-cart");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if (showAddToCartButton !== null) {
  showAddToCartButton.addEventListener("click", function(event) {
      event.preventDefault();
      showModalForm(addToCartForm);
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) { //Esc key
      event.preventDefault();
      if (addToCartForm.classList.contains("modal__show")) {
        hideModalForm(addToCartForm);
      }
    }
  });
}

function showModalForm(form) {
  if (form !== null) {
      form.classList.add("modal__show");
      showModalLayer();
  }
}

function hideModalForm(form) {
  if (form !== null) {
      form.classList.remove("modal__show");
      form.classList.remove("modal__error");
      hideModalLayer();
  }
}

function showModalLayer() {
  modalLayer.style.display = "block";
}

function hideModalLayer() {
  modalLayer.style.display = "none";
}
