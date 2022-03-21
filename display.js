import { operateHierarchies, pow, square } from "./calculator.js";
import { Display } from "./Displays.js";
import { validateSyntax, isEmpty } from "./validation/validate.js";

const current = document.getElementById("current");
const history = document.getElementById("history");
const buttons = document.querySelectorAll("button");
const btnClear = document.querySelector(".clear");
const display = new Display(current, history);
const ERROR_MESSAGE = "Syntax ERROR";
const MAX_LENGHT = 17;
const EQUAL = "=";
const SQUARE = "√";
const EXPONENT = "x<sup>2</sup>";

const clearDisplay = () => {
   display.setCurrent("");
   display.setHistory("");
   buttons.forEach((btn) => (btn.disabled = false));
};

const removeLastChar = () => {
   display.setCurrent(display.getCurrent().slice(0, -1));
};

const pushValue = (value) => {
   if (display.getCurrent().length < MAX_LENGHT) {
      display.setCurrent(display.getCurrent() + value.innerHTML);
   }
};

const operate = (btn) => {
   let current = display.getCurrent();
   if (!isEmpty(current)) {
      if (validateSyntax(current)) {
         const result = operateHierarchies(current);
         switch (btn.innerHTML) {
            case EQUAL:
               display.setHistory(current);
               display.setCurrent(isFinite(result) ? result : ERROR_MESSAGE);
               break;
            case SQUARE:
               display.setHistory(`√(${current})`);
               display.setCurrent(
                  isFinite(result) && result >= 0
                     ? square(result)
                     : ERROR_MESSAGE
               );
               break;
            case EXPONENT:
               display.setHistory(`(${current})<sup>2</sup>`);
               display.setCurrent(
                  isFinite(result) ? pow(result, 2) : ERROR_MESSAGE
               );
               break;
         }
      } else {
         display.setHistory(current);
         display.setCurrent(ERROR_MESSAGE);
      }
      verifyState();
   }
};

const verifyState = () => {
   if (display.getCurrent() === ERROR_MESSAGE) {
      buttons.forEach((btn) => (btn.disabled = true));
      btnClear.disabled = false;
   }
};

export { removeLastChar, clearDisplay, pushValue, operate };
