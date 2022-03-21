const isEmpty = (string) => {
   return string === "";
};

const isFirstASign = (arrayString) => {
   const first = arrayString.shift();
   return first === "×" || first === "÷";
};

const isLastASign = (arrayString) => {
   const last = arrayString.pop();
   return last === "+" || last === "-" || last === "×" || last === "÷";
};

const isSignRepeated = (arrayString) => {
   let aux = false;
   let repeated = false;
   const isSign = (value) => {
      return value === "+" || value === "-" || value === "×" || value === "÷";
   };
   arrayString.forEach((x) => {
      let sing = isSign(x);
      if (sing) {
         if (aux && sing) {
            repeated = true;
         }
         aux = true;
      } else {
         aux = false;
      }
   });
   return repeated;
};

const validateSyntax = (string) => {
   const arrayString = string.split("");
   return (
      !isFirstASign(arrayString) &&
      !isLastASign(arrayString) &&
      !isSignRepeated(arrayString)
   );
};

export { isEmpty, validateSyntax };
