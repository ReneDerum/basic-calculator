import { splitString, filterSigns } from "./utile/stringutil.js";

const sum = (a, b) => {
   return a + b;
};

const substract = (a, b) => {
   return a - b;
};

const multiply = (a, b) => {
   return a * b;
};

const divide = (a, b) => {
   return a / b;
};

const pow = (a, b) => {
   return a ** b;
};

const square = (x) => {
   return Math.sqrt(x);
};

const operateHierarchy = (numbers, callback, callback2, signs, sign) => {
   let firsNumber = numbers.shift();
   return numbers.reduce(
      (result, number, index) =>
         signs[index] === sign
            ? callback(result, number)
            : callback2(result, number),
      firsNumber
   );
};

const operateHierarchies = (string) => {
   const signsSR = filterSigns(string, "+", "-");
   const numbersSR = splitString(string, "+", "-")
      .map((str) => {
         if (str.includes("×") || str.includes("÷")) {
            const signs = filterSigns(str, "×", "÷");
            const numbers = splitString(str, "×", "÷").map((x) => Number(x));
            return operateHierarchy(numbers, multiply, divide, signs, "×");
         } else {
            return str;
         }
      })
      .map((x) => Number(x));
   return operateHierarchy(numbersSR, sum, substract, signsSR, "+");
};

export { operateHierarchies, pow, square };
