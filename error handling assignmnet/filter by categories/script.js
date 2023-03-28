products = [
  { name: "shirt", category: "clothing" },
  { name: "pants", category: "clothing" },
  { name: "earphone", category: "electronic" },
  { name: "poco m2 pro", category: "smartphones" },
  { name: "sunglasses", category: "accessories" },
];

const filterByCategories = (products_arr) => {
  return function (category) {
    let filteredArr = products_arr.filter((product) => {
      if (product.category==category) {
        return product;
      }
    });
    return filteredArr;
  };
};

let clothing = filterByCategories(products)("smartphones");
console.log(clothing);
