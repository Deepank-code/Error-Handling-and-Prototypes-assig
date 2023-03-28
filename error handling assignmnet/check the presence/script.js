function numberChecker(arr) {
  return function (num) {
    return (arr.includes(num)) ?
       true: false;

  };
}
console.log(numberChecker([1, 4, 554, 7])(4));
