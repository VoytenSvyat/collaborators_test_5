function mostFrequent(arr) {
  let mostFrequentEl = arr[0];
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      mostFrequentEl = arr[i];
    }
  }

  return mostFrequentEl;
}

console.log(mostFrequent([12, 12, 4, 4, 12, 5, 4, 12, 3, 12, 3, 3, 4])); 
