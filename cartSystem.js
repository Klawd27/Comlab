// Array
let products = [
  { name: "Flat White", price: 100, quantity: 1, ordered: 0 },
  { name: "Cafe Au' Lait", price: 100, quantity: 1, ordered: 0 },
  { name: "Lily", price: 100, quantity: 1, ordered: 0 },
  { name: "Croissant", price: 100, quantity: 1, ordered: 0 },
  { name: "Rose", price: 100, quantity: 1, ordered: 0 },
  { name: "Buche de Noel", price: 100, quantity: 1, ordered: 0 },
];
// Array

// increaseFunctionMain
function increaseQuantity(id) {
  let index = id - 1;
  products[index].quantity += 1;
  let quantityDisplay = document.getElementById(`QD${id}`);
  quantityDisplay.value = products[index].quantity;
}
// increaseFunctionMain

// MinusFunctionMain
function minusQuantity(id) {
  let index = id - 1;
  if (products[index].quantity > 1) {
    products[index].quantity -= 1;
    let quantityDisplay = document.getElementById(`QD${id}`);
    quantityDisplay.value = products[index].quantity;
  }
}
// MinusFunctionMain

// orderFunction
function order(id, prod) {
  let index = id - 1;
  products[index].ordered += products[index].quantity;
  let prodElement = document.getElementById(prod);
  prodElement.classList.add(`prod${id}-show`);
  finalQuantityDisplay(id);
  totalCartDisplay();
  totalAmount(id);
  subTotal();
}
// orderFunction

// MinusQuantityInCart
function minusQuantityCart(id, prod, show) {
  let index = id - 1;
  let prodElement = document.getElementById(prod);
  if (products[index].ordered > 0) {
    products[index].ordered -= 1;
    finalQuantityDisplay(id);
    totalCartDisplay();
    totalAmount(id);
    subTotal();
    console.log(products[index].ordered);
  }
  if (products[index].ordered <= 0) {
    prodElement.classList.remove(`prod${id}-show`);
  }
}
// MinusQuantityInCart

// AddQuantityInCart
function addQuantityCart(id, prod, show) {
  let index = id - 1;
  let prodElement = document.getElementById(prod);
  products[index].ordered += 1;
  finalQuantityDisplay(id);
  totalCartDisplay();
  totalAmount(id);
  subTotal();
}
// AddQuantityInCart

// FinalQuantityDisplay
function finalQuantityDisplay(id) {
  let index = id - 1;
  let quantityElement = document.getElementById(`finalQ${id}`);
  quantityElement.value = products[index].ordered;
}
// FinalQuantityDisplay

// totalCartIncartButton
function totalCartDisplay() {
  let totalCart = document.getElementById("cartNum");
  totalCart.value = products.reduce((sum, product) => sum + product.ordered, 0);
}
// totalCartIncartButton

// totalAmmountofEachOrder
function totalAmount(id) {
  let index = id - 1;
  let elementPT = document.getElementById(`PT${id}`);
  let formatedAmmount = products[index].price * products[index].ordered;
  elementPT.value = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(formatedAmmount);
}
// totalAmmountofEachOrder

// Subtotal
function subTotal() {
  let subtotal = document.getElementById("subTotal");
  let subTotalAmount = products.reduce(
    (sum, product) => sum + product.price * product.ordered,
    0,
  );
  let deliverQuantitydecide = products.reduce(
    (sum, product) => sum + product.ordered,
    0,
  );
  console.log("totalQuantity: " + deliverQuantitydecide);
  let subTotalAmountformat = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(subTotalAmount);
  subtotal.value = "Subtotal: " + subTotalAmountformat;

  let deliveryAmount = document.getElementById("deliveryFee");
  let deliverVal = 0; // DeliveryPrice Decide
  if (deliverQuantitydecide >= 1 && deliverQuantitydecide <= 4) {
    deliverVal = 39.49;
  } else if (deliverQuantitydecide >= 5 && deliverQuantitydecide <= 9) {
    deliverVal = 49.49;
  } else if (deliverQuantitydecide >= 10 && deliverQuantitydecide <= 19) {
    deliverVal = 59.49;
  } else if (deliverQuantitydecide > 19) {
    deliverVal = 69.49;
  } else {
    deliverVal = 0;
  }
  let deliverValformat = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(deliverVal);
  deliveryAmount.value = "Delivery: " + deliverValformat;
  console.log("Delivery fee:" + deliverValformat);

  // OverAllAmmount
  let overAllamount = document.getElementById("totalCheck");
  let ovaAmount = deliverVal + subTotalAmount;
  let ovaAmountformat = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(ovaAmount);
  overAllamount.value = "Total Amount: " + ovaAmountformat;
}
// Subtotal

// checkout
let checkoutBox = document.querySelector(".checkoutConMain");
let invBox = document.querySelector(".afterInvBox2");
let closeCon = document.querySelector(".closeCon");
function checkout() {
  let loading = document.getElementById("loading");
  let text1 = document.querySelector(".text1");
  let text2 = document.querySelector(".text2");

  let conditonQuantity = products.reduce(
    (sum, product) => sum + product.ordered,
    0,
  );
  if (conditonQuantity >= 1) {
    checkoutBox.classList.add("checkoutConMain-show");
    invBox.classList.add("afterInvBox2-show");

    //firsttimeout
    setTimeout(() => {
      products.forEach((product) => (product.ordered = 0));
      products.forEach((product, idx) => finalQuantityDisplay(idx + 1));

      loading.classList.remove("loading-show");
      text1.classList.remove("text1-show");

      subTotal();
      totalCartDisplay();

      loading.classList.add("loading-show");
      text1.classList.add("text1-show");
    }, 2000);

    setTimeout(() => {
      text2.classList.add("text2-show");
    }, 2500);

    setTimeout(() => {
      closeCon.classList.add("closeCon-show");
    }, 3100);
  }
}

closeCon.addEventListener("click", () => {
  checkoutBox.classList.remove("checkoutConMain-show");
  invBox.classList.remove("afterInvBox2-show");
});
// checkout
