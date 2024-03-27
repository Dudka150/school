function isValid(str) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    const bracketPairs = { ')': '(', '}': '{', ']': '[' };
  
    for (let char of str) {
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isValid("()")); 
  console.log(isValid("()[]{}")); 
  console.log(isValid("(]")); 
  console.log(isValid("([)]")); 
  console.log(isValid("{[]}")); 