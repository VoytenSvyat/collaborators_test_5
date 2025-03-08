function groupByParity(arr) {
    return {
      even: arr.filter(num => num % 2 === 0),
      odd: arr.filter(num => num % 2 !== 0)
    };
  }
  
  console.log(groupByParity([1, 2, 3, 4, 5, 6])); 
