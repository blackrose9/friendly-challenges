const switchToBinary = toBinaryFunc = (number) => (number >>> 0).toString(2);

const switchToNumber = toNumberFunc = (binaryNum) => parseInt(binaryNum, 2);

const add = addDigits = (num1,num2) => num1+num2;

let input1 = switchToNumber(prompt("Write your first binary number"));
let input2 = switchToNumber(prompt("Write your second binary number"));

let result = add(input1,input2);
console.log(switchToBinary(result));