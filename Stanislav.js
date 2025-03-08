function removeDuplicates(arr) {
  // TODO
  const newArr = arr.filter((number, index) => arr.indexOf(number) === index);
  return newArr;
}


console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5, 8, 7, 7]));
