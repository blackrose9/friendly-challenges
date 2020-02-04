initialInput = prompt("Enter a palindrome");
initialInputArray = initialInput.split("");
reversedArray = initialInputArray.reverse();
reversedInput = reversedArray.join("");
boolResult = initialInput===reversedInput;
console.log(boolResult);