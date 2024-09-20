/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "{") {
      stack.push("}");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (!stack.length || stack.pop() !== s[i]) {
      return false;
    }
  }

  return !stack.length;
};

const input = "()[]{}";

console.log(isValid(input));
