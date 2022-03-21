const splitString = (string, sign, sign2) => {
   return string
      .split(sign)
      .map((x) => x.split(sign2))
      .flat();
};

const filterSigns = (string, sign, sign2) => {
   let index = 0;
   return string.split("").reduce((signs, value) => {
      if (value === sign || value === sign2) {
         signs[index++] = value;
         return signs;
      } else {
         return signs;
      }
   }, []);
};
export { splitString, filterSigns };
