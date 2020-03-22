partsSums = sumOfParts = (arr) => {
   let sumOfParts=[];
   let arrlength = arr.length;
   
   for(let i=0;i<=arrlength;i++){
      sumOfParts.push(arr.reduce((a,b)=>a+b,0));
      arr.splice(0,1);
   }
   return sumOfParts;
}

console.log(partsSums([0, 1, 3, 6, 10]))
console.log(partsSums([1, 2, 3, 4, 5, 6]))