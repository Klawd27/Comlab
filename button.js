//OpenCart

let openCart = document.getElementById("openBtC");
let closeCart = document.getElementById("closeCart");
let cartBox = document.getElementById("cartBox");

let cartInvisiblebarrier = document.querySelector(".invisibleBox");

openCart.addEventListener("click", () => {
  cartBox.classList.add("cartContainer-show");
  cartInvisiblebarrier.classList.add("invisibleBox-show");
});

closeCart.addEventListener("click", () => {
  cartBox.classList.remove("cartContainer-show");
  cartInvisiblebarrier.classList.remove("invisibleBox-show");
});

//OpenCart

//Openorder

let openOrder = document.getElementById("openOrder");
let homeBt = document.getElementById("homeBt");
let orderBox = document.querySelector(".orderContainer");

openOrder.addEventListener("click", () => {
  orderBox.classList.add("orderContainer-show");
});

homeBt.addEventListener("click", () => {
  orderBox.classList.remove("orderContainer-show");
});

//Openorder

//MenuView

let menuButton = document.getElementById("menuBt");
let homeView = document.querySelector(".home-view");
let menuButton2 = document.getElementById("menubt2");

menuButton.addEventListener("click", () => {
  homeView.classList.add("home-view-show");
});

menuButton2.addEventListener("click", () => {
  homeView.classList.add("home-view-show");
});

homeBt.addEventListener("click", () => {
  homeView.classList.remove("home-view-show");
});
//Menu View
