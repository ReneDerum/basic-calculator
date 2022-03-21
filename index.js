import { removeLastChar, clearDisplay, pushValue, operate } from "./display.js";

const btnNumbers = document.querySelectorAll(".number");
const btnOperators = document.querySelectorAll(".operator");
const btnDelete = document.querySelector(".delete");
const btnClear = document.querySelector(".clear");

btnNumbers.forEach((btn) => {
   btn.addEventListener("click", () => pushValue(btn));
});

btnOperators.forEach((btn) => {
   btn.addEventListener("click", () => operate(btn));
});

btnDelete.addEventListener("click", () => {
   removeLastChar();
});

btnClear.addEventListener("click", () => {
   clearDisplay();
});
