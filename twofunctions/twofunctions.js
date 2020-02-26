firstFunction = (a,b,c) => {
   let halfC = c*0.5;
   return (a*b*c)/halfC;
}

secondFunction = (x,y) => {
   let modulusOfXY = (x%y)+1;
   return firstFunction(modulusOfXY,x,y);
}

let result = secondFunction(8, 9)
console.log(result);