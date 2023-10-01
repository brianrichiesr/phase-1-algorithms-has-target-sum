function hasTargetSum(array, target) {
  /* (n steps: depending on the size of the array) */
  for (let i = 0; i < array.length; i++) {
    /* (n steps: depending on the size of the array) */
    const solutionNumber = target - array[i];
    /* (n steps: depending on the size of the array) * 2 conditionals */
    if (array.includes(solutionNumber) && array.indexOf(solutionNumber) !== i) {
      return true;
    }
  }
  /* 1 step */
  return false;
}

/* 
  * n steps for the for loop because I don't know the size of the array
  * n steps for the assignment of a value for 'solutionNumber' because this one step happens each iteration and I don't know the size of the array
  * 2n steps, one n for each condition checked, because the conditions are checked on each iteration and I don't know the size of the array
  * *** Adjustment to comments ***
  * After watching the video and researching 'MDN', '.includes()' is iterative and therefore changes part of the Big O complexity from 2n for the if statment to 2n^2
  * 1 step that can potentially happen if the condition in the for loop does not return true
  * 
  * Big O = O(4n^2 + 1)
  * 
  * Remove Constants = O(n^2)
*/

/* 
  Iterate through the array
    Figure out what number is needed to add to the index of the iteration to equal 'target'
    Figure out if number needed is included in the array
    Make sure the number needed is not the same index
    Return true if the number needed is in the array
  Return false if it isn't
*/

/*
  * I have to iterate through 'array' to perform an evaluation on each number in 'array' and I prefer for loops
  * At each iteration, I assign to a variable the result of subtracting the current index from 'target' in order to determine what number is needed to add to the current index to equal 'target'
  * I use the '.includes()' method to determine if the number needed is included in 'array'
  * If the needed number is included in 'array', return true
  * If the for loop complete and no solution is found, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
