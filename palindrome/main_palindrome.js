const checkPalindrome = (input) => {
  input = input.toLowerCase();
  let newStr = "";
  for (let i = 0; i < input.length; i++) {
    newStr = input[i] + newStr;
  }

  /* if (input === newStr) {
      return true;
    } else {
      false;
    } */

  return input === newStr;
};

const checkPalindromeV2 = (input) => {
  input = input.toLowerCase();
  let newStr = "";

  for (let i = input.length - 1; i >= 0; i--) {
    newStr = newStr + input[i];
  }

  /* if (input === newStr) {
        return true;
      } else {
        false;
      } */

  return input === newStr;
};

const checkPalindromeV3 = (input) => {
  for (let i = 0; i < input.length / 2; i++) {
    const firstElem = input[i];
    const lastElem = input[input.length - 1 - i];

    if (firstElem !== lastElem) {
      return false;
    }
  }

  return true;
};

// input - my name is ankit mam Hello madam
const findAllPalindromes = (input) => {
  const splittedStr = input.split(" "); // []
  // remove all special character

  const myMatchedPalindrome = [];

  for (let i = 0; i < splittedStr.length; i++) {
    const isPalindrome = checkPalindromeV3(splittedStr[i]);
    if (isPalindrome) {
      myMatchedPalindrome.push(splittedStr[i]);
    }
  }

  return myMatchedPalindrome;
};

console.log(findAllPalindromes("my name is ankit mam Hello madam "));
