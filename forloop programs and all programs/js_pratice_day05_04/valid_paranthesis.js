// using javascript Given a string s containing just the characters '(', ')',determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true

function isValid(s) {
  const stack = [];
  const openBrackets = ["(", "[", "{"];
  const closeBrackets = [")", "]", "}"];
  for (let i = 0; i < s.length; i++) {
    const bracket = s.charAt(i);
    if (openBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (closeBrackets.includes(bracket)) {
      const lastOpenBracket = stack.pop();
      if (
        openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(bracket)
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
