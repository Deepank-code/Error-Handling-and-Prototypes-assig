const convertToNumber = (string) => {
  if (Number(string)) {
    return parseInt(string);
  } else {
    return "Invalid number";
  }
};
console.log(convertToNumber("45"));
