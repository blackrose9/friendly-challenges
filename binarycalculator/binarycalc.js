let switchToBinary = toBinaryFunc = (number) => {
   return (number >>> 0).toString(2);
}
let switchToNumber = toNumberFunc = (binaryNum) => {
   return parseInt(binaryNum, 2);
}
let add = addDigits = (num1,num2) => {
   return num1 + num2;
}
let input1 = switchToNumber(prompt("Write your first binary number"));
let input2 = switchToNumber(prompt("Write your second binary number"));

let result = add(input1,input2);
console.log(switchToBinary(result));