// part 1 update cart quantity
let currentCartQuantity = 0;

function showCartQuantity() {
  document.querySelector("#totalQuantity").innerHTML = currentCartQuantity;
}

function addOne() {
  currentCartQuantity += 1;
}
function addTwo() {
  currentCartQuantity += 2;
}
function addThree() {
  currentCartQuantity += 3;
}
function resetCart() {
  currentCartQuantity = 0;
  document.querySelector("#totalQuantity").innerHTML = currentCartQuantity;
}

//part2: a shipping calculator with dilivery fee

//calBtn onclick return the input value
function calculateTotal() {
  let inputCost = document.querySelector(".inputCost").value;
  inputCost = Number(inputCost);

  if (inputCost === 0) {
    inputCost = 0;
  } else if (inputCost > 0 && inputCost < 50) {
    inputCost += 10;
  }
  let finalCost = inputCost;
  document.querySelector(
    ".finalCost"
  ).innerText = `Total cost is: $ ${finalCost}`;
}

//handle keyboard operation of 'Enter' to call calculateTotal

function handleEnterKey(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}
